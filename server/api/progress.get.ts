import { requireFirebaseUser, getFirebaseAdmin } from '../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event)
  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.doc(`users/${user.uid}/courseProgress/race-for-parliament`).get()

  return snapshot.exists
    ? snapshot.data()
    : { passedModules: [], scores: {}, attemptsByModule: {}, latestAttemptId: null }
})
