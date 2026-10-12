import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.collection('quizAttempts').orderBy('createdAt', 'desc').limit(100).get()
  const results = await Promise.all(snapshot.docs.map(async (attempt) => {
    const data = attempt.data()
    const participant = await db.doc(`users/${data.uid}`).get()
    return {
      id: attempt.id,
      ...data,
      createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
      participantName: participant.get('displayName') ?? participant.get('email') ?? data.uid,
    }
  }))
  return { results }
})
