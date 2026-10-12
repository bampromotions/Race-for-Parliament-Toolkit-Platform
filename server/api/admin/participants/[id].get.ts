import { getFirebaseAdmin, requireAdminUser } from '../../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const participantId = getRouterParam(event, 'id')
  if (!participantId || !/^[A-Za-z0-9_-]{1,128}$/.test(participantId)) {
    throw createError({ statusCode: 400, statusMessage: 'The participant ID is invalid.' })
  }

  const { db } = getFirebaseAdmin(event)
  const profileRef = db.doc(`users/${participantId}`)
  const [profile, progress, attempts] = await Promise.all([
    profileRef.get(),
    db.doc(`users/${participantId}/courseProgress/race-for-parliament`).get(),
    db.collection('quizAttempts').where('uid', '==', participantId).orderBy('createdAt', 'desc').limit(100).get(),
  ])
  if (!profile.exists) throw createError({ statusCode: 404, statusMessage: 'Participant not found.' })

  return {
    profile: profile.data(),
    progress: progress.exists ? progress.data() : null,
    attempts: attempts.docs.map((attempt) => {
      const data = attempt.data()
      const createdAt = data.createdAt?.toDate?.()
      return { id: attempt.id, ...data, createdAt: createdAt?.toISOString() ?? null }
    }),
  }
})
