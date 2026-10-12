import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

export function useAuth() {
  const firebase = useFirebase()

  async function signIn(email: string, password: string) {
    const { auth } = firebase.requireFirebase()
    const credential = await signInWithEmailAndPassword(auth, email.trim(), password)
    await credential.user.getIdTokenResult(true)
    await firebase.refreshSession()
    return credential
  }

  async function register(input: {
    name: string
    email: string
    password: string
    organisation: string
    preferredLanguage: 'en' | 'st'
  }) {
    const { auth, db } = firebase.requireFirebase()
    const credential = await createUserWithEmailAndPassword(auth, input.email.trim(), input.password)

    try {
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
      await deleteUser(credential.user)
      throw error
    }

    return credential
  }

  async function resetPassword(email: string) {
    const { auth } = firebase.requireFirebase()
    return sendPasswordResetEmail(auth, email.trim(), {
      url: new URL('/auth/reset-password', window.location.origin).toString(),
      handleCodeInApp: true,
    })
  }

  async function signOut() {
    const { auth } = firebase.requireFirebase()
    return firebaseSignOut(auth)
  }

  return { signIn, register, resetPassword, signOut }
}
