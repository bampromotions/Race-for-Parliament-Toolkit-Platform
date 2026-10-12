export function useFirebase() {
  const firebase = useNuxtApp().$firebase

  function requireFirebase() {
    if (!firebase.configured || !firebase.auth || !firebase.db) {
      throw new Error('Firebase is not configured. Set the NUXT_PUBLIC_FIREBASE_* environment variables.')
    }

    return { auth: firebase.auth, db: firebase.db }
  }

  return {
    ...firebase,
    requireFirebase,
  }
}
