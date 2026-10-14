import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const [courseAttempts, standaloneAttempts] = await Promise.all([
    db.collection('quizAttempts').orderBy('createdAt', 'desc').limit(100).get(),
    db.collection('standaloneQuizAttempts').orderBy('createdAt', 'desc').limit(100).get(),
  ])
  const attempts = [
    ...courseAttempts.docs.map((attempt) => ({ attempt, standalone: false })),
    ...standaloneAttempts.docs.map((attempt) => ({ attempt, standalone: true })),
  ]
  const results = await Promise.all(attempts.map(async ({ attempt, standalone }) => {
    const data = attempt.data()
    const participant = await db.doc(`users/${data.uid}`).get()
    return {
      id: attempt.id,
      ...data,
      standalone,
      reviewStatus: data.reviewStatus === 'reviewed'
        ? 'reviewed'
        : data.reviewStatus === 'pending'
          ? 'pending'
          : 'unavailable',
      createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
      participantName: participant.get('displayName') ?? participant.get('email') ?? data.uid,
    }
  }))
  results.sort((left, right) => (right.createdAt ?? '').localeCompare(left.createdAt ?? ''))
  return { results: results.slice(0, 100) }
})
