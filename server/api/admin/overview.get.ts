import { FieldPath, type QueryDocumentSnapshot } from 'firebase-admin/firestore'
import { courseId } from '../../../app/data/course'
import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const usersCollection = db.collection('users')
  let cursor: QueryDocumentSnapshot | undefined
  let total = 0
  let started = 0
  let completed = 0

  while (true) {
    let usersQuery = usersCollection.orderBy(FieldPath.documentId()).limit(100)
    if (cursor) usersQuery = usersQuery.startAfter(cursor)

    const profiles = await usersQuery.get()
    const participants = profiles.docs.filter((profile) => profile.get('role') === 'participant')
    total += participants.length

    const progressSnapshots = await Promise.all(participants.map((profile) =>
      db.doc(`users/${profile.id}/courseProgress/${courseId}`).get()))
    for (const progress of progressSnapshots) {
      if (!progress.exists) continue
      started += 1
      const passedModules = progress.get('passedModules')
      if (Array.isArray(passedModules) && passedModules.includes(4)) completed += 1
    }

    if (profiles.size < 100) break
    cursor = profiles.docs[profiles.docs.length - 1]
  }

  const attempts = await db.collection('quizAttempts').orderBy('createdAt', 'desc').limit(500).get()
  const scores = attempts.docs.map((doc) => Number(doc.data().score)).filter(Number.isFinite)

  return {
    totalParticipants: total,
    completed,
    inProgress: Math.max(0, started - completed),
    notStarted: Math.max(0, total - started),
    averageScore: scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : null,
  }
})
