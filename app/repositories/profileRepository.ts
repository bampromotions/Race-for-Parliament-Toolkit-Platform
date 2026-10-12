import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { updateProfile, type User } from 'firebase/auth'

export interface ParticipantProfile {
  uid: string
  displayName: string
  email: string
  organisation: string
  phone: string
  preferredLanguage: 'en' | 'st'
}

export function createProfileRepository(db: ReturnType<typeof useFirebase>['db'], uid: string, authUser: User | null) {
  if (!db) throw new Error('Firebase is not configured.')
  const profileRef = doc(db, 'users', uid)

  return {
    async get(): Promise<ParticipantProfile | null> {
      const snapshot = await getDoc(profileRef)
      return snapshot.exists() ? snapshot.data() as ParticipantProfile : null
    },
    async update(profile: Pick<ParticipantProfile, 'displayName' | 'organisation' | 'phone' | 'preferredLanguage'>) {
      await setDoc(profileRef, { ...profile, updatedAt: serverTimestamp() }, { merge: true })
      if (authUser) await updateProfile(authUser, { displayName: profile.displayName })
    },
  }
}
