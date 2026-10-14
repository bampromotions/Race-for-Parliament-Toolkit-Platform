import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const [participantsCount, progressCount, completedCount, attempts] = await Promise.all([
    db.collection('users').where('role', '==', 'participant').count().get(),
    db.collectionGroup('courseProgress').count().get(),
    db.collectionGroup('courseProgress').where('passedModules', 'array-contains', 4).count().get(),
    db.collection('quizAttempts').orderBy('createdAt', 'desc').limit(500).get(),
  ])
  const scores = attempts.docs.map((doc) => Number(doc.data().score)).filter(Number.isFinite)
  const total = participantsCount.data().count
  const started = progressCount.data().count
  const completed = completedCount.data().count

  return {
    totalParticipants: total,
    completed,
    inProgress: Math.max(0, started - completed),
    notStarted: Math.max(0, total - started),
    averageScore: scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null,
  }
})
