import type { Auth } from 'firebase/auth'
import type { FirebaseApp } from 'firebase/app'
import type { Firestore } from 'firebase/firestore'
import type { Ref } from 'vue'

export interface FirebaseSession {
  uid: string
  email: string | null
  displayName: string | null
  isAdmin: boolean
}

export interface FirebaseClient {
  configured: boolean
  app: FirebaseApp | null
  auth: Auth | null
  db: Firestore | null
  ready: Promise<void>
  refreshSession: () => Promise<void>
  session: Ref<FirebaseSession | null>
  error: Ref<string | null>
}
