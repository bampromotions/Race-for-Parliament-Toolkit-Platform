import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import type { FirebaseClient, FirebaseSession, UserRole } from '../types/firebase'

function getUserRole(claims: Record<string, unknown>): UserRole {
  if (claims.admin === true) return 'admin'
  if (claims.role === 'admin' || claims.role === 'contentEditor' || claims.role === 'marker') {
    return claims.role
  }
  return 'participant'
}

export default defineNuxtPlugin(() => {
  
  const config = useRuntimeConfig().public

  const firebaseConfig = {
    apiKey: config.firebaseApiKey,
    authDomain: config.firebaseAuthDomain,
    projectId: config.firebaseProjectId,
    storageBucket: config.firebaseStorageBucket,
    messagingSenderId: config.firebaseMessagingSenderId,
    appId: config.firebaseAppId,
    measurementId: config.firebaseMeasurementId,
  }
   
  const configured = Boolean(
    firebaseConfig.apiKey
    && firebaseConfig.authDomain
    && firebaseConfig.projectId
    && firebaseConfig.appId,
  )
  const session = useState<FirebaseSession | null>('firebase-session', () => null)
  const error = useState<string | null>('firebase-session-error', () => null)

  if (!configured) {
    const firebase: FirebaseClient = {
      configured: false,
      app: null,
      auth: null,
      db: null,
      ready: Promise.resolve(),
      refreshSession: async () => {},
      session,
      error,
    }

    return { provide: { firebase } }
  }

  const app = getApps().find((item) => item.name === '[DEFAULT]')
    ?? initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  if (firebaseConfig.measurementId) {
    void isSupported().then((supported) => {
      if (supported) getAnalytics(app)
    })
  }

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
      const role = getUserRole(token.claims)
      session.value = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        role,
        isAdmin: role === 'admin',
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

  const firebase: FirebaseClient = {
    configured: true,
    app,
    auth,
    db,
    ready,
    refreshSession,
    session,
    error,
  }

  return { provide: { firebase } }
})
