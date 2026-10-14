import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

type RegistrationInput = {
  name: string
  email: string
  password: string
  organisation: string
  preferredLanguage: 'en' | 'st'
}

export function useAuth() {
  const firebase = useFirebase()
  const { log } = useLogger()

  function logFailure(action: string, error: unknown) {
    const details: Record<string, unknown> = {
      event: `auth.${action}.failed`,
      errorName: error instanceof Error ? error.name : 'UnknownError',
    }
    const code = typeof error === 'object' && error !== null && 'code' in error
      ? error.code
      : undefined
    if (typeof code === 'string') details.errorCode = code

    log('error', `Authentication ${action} failed`, details)
  }

  async function signIn(email: string, password: string) {
    log('debug', 'Authentication sign-in started', { event: 'auth.sign-in.started' })
    try {
      const { auth } = firebase.requireFirebase()
      const credential = await signInWithEmailAndPassword(auth, email.trim(), password)
      await firebase.refreshSession()
      log('info', 'Authentication sign-in succeeded', { event: 'auth.sign-in.succeeded' })
      if (firebase.error.value) throw new Error(firebase.error.value)
      if (!firebase.session.value) throw new Error('Unable to load the signed-in user profile.')
      return firebase.session.value.role
    } catch (error) {
      logFailure('sign-in', error)
      throw error
    }
  }

  async function register(input: RegistrationInput) {
    const email = input.email.trim()
    if (
      !input.name.trim()
      || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      || !input.password.trim()
      || input.password.length < 8
    ) {
      throw new Error('A valid email, name, and password of at least 8 characters are required.')
    }

    log('debug', 'Authentication registration started', { event: 'auth.register.started' })
    let credential
    try {
      const { auth, db } = firebase.requireFirebase()
      credential = await createUserWithEmailAndPassword(auth, email, input.password)

      await updateProfile(credential.user, { displayName: input.name.trim() })
      await setDoc(doc(db, 'users', credential.user.uid), {
        uid: credential.user.uid,
        displayName: input.name.trim(),
        email: credential.user.email,
        organisation: input.organisation.trim(),
        preferredLanguage: input.preferredLanguage,
        role: 'participant',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      await firebase.refreshSession()
    } catch (error) {
      logFailure('register', error)
      if (credential) await deleteUser(credential.user)
      throw error
    }

    log('info', 'Authentication registration succeeded', { event: 'auth.register.succeeded' })
    return credential
  }

  async function resetPassword(email: string) {
    log('debug', 'Password reset started', { event: 'auth.password-reset.started' })
    try {
      const { auth } = firebase.requireFirebase()
      await sendPasswordResetEmail(auth, email.trim(), {
        url: new URL('/auth/reset-password', window.location.origin).toString(),
        handleCodeInApp: true,
      })
      log('info', 'Password reset email sent', { event: 'auth.password-reset.succeeded' })
    } catch (error) {
      logFailure('password-reset', error)
      throw error
    }
  }

  async function signOut() {
    log('debug', 'Authentication sign-out started', { event: 'auth.sign-out.started' })
    try {
      const { auth } = firebase.requireFirebase()
      await firebaseSignOut(auth)
      log('info', 'Authentication sign-out succeeded', { event: 'auth.sign-out.succeeded' })
    } catch (error) {
      logFailure('sign-out', error)
      throw error
    }
  }

  return { signIn, register, resetPassword, signOut }
}
