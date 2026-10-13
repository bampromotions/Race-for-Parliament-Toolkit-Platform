import type { FirebaseClient, FirebaseSession } from '../types/firebase'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const configured = Boolean(
    config.firebaseApiKey
    && config.firebaseAuthDomain
    && config.firebaseProjectId
    && config.firebaseAppId,
  )
  const firebase: FirebaseClient = {
    configured,
    app: null,
    auth: null,
    db: null,
    ready: Promise.resolve(),
    refreshSession: async () => {
      throw new Error('Firebase authentication is only available in the browser.')
    },
    session: useState<FirebaseSession | null>('firebase-session', () => null),
    error: useState<string | null>('firebase-session-error', () => null),
  }

  return { provide: { firebase } }
})
