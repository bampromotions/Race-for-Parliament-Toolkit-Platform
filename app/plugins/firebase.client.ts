import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import type { FirebaseClient, FirebaseSession } from '../types/firebase'
import { getUserRole } from '../utils/firebase-role'

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

      const profile = await getDoc(doc(db, 'users', user.uid))
      if (!profile.exists()) {
        throw new Error(`Firestore document users/${user.uid} was not found. Create it with role set to "admin" for an Admin account, or "participant" for a Participant account.`)
      }
      const role = getUserRole(profile.get('role'))
      session.value = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || profile.get('displayName') || null,
        role,
        isAdmin: role === 'admin',
      }
    } catch (cause) {
      session.value = null
      error.value = cause instanceof Error
        ? `Unable to load the Firestore user profile: ${cause.message}`
        : 'Unable to load the Firestore user profile.'
    } finally {
      resolveReady()
    }
  }

  const refreshSession = async () => {
    await updateSession(auth.currentUser)
    if (error.value) throw new Error(error.value)
  }
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
