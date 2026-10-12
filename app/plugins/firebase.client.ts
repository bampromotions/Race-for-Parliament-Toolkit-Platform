import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: String(config.firebaseMeasurementId || ''),
  }
  const configured: boolean = Boolean(
    firebaseConfig.apiKey
      && firebaseConfig.authDomain
      && firebaseConfig.projectId
      && firebaseConfig.appId,
  )
  const session = useState<FirebaseSession | null>('firebase-session', () => null)
  const error = useState<string | null>('firebase-session-error', () => null)

  const emptyFirebaseClient: FirebaseClient = {
    configured: false,
    app: null,
    auth: null,
    db: null,
    ready: Promise.resolve(),
    refreshSession: async () => {},
    session,
    error,
  }

  if (!configured) {
    return {
      provide: {
        firebase: emptyFirebaseClient,
      },
    }
  }

  const app = getApps().find((item) => item.name === '[DEFAULT]')
    ?? initializeApp(firebaseConfig)
  if (firebaseConfig.measurementId) {
    void isSupported().then((supported) => {
      if (supported) getAnalytics(app)
    })
  }
  const auth = getAuth(app)
  const db = getFirestore(app)
  let resolveReady!: () => void
  const ready = new Promise<void>((resolve) => {
    resolveReady = resolve
  })

  const updateSession = async (user: User | null) => {
    try {
      error.value = null
      if (!user) {
        session.value = null
        return
      }

      const token = await user.getIdTokenResult()
      session.value = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        isAdmin: token.claims.admin === true,
      }
    } catch (cause) {
      session.value = null
      error.value = cause instanceof Error ? cause.message : 'Unable to verify the signed-in user.'
    } finally {
      resolveReady()
    }
  }

  const refreshSession = () => updateSession(auth.currentUser)

  onAuthStateChanged(auth, (user) => {
    void updateSession(user)
  })

  const firebaseClient: FirebaseClient = {
    configured: true,
    app,
    auth,
    db,
    ready,
    refreshSession,
    session,
    error,
  }

  return {
    provide: {
      firebase: firebaseClient,
    },
  }
})
