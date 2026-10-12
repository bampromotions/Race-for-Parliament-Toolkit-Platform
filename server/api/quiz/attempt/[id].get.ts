import { getFirebaseAdmin, requireFirebaseUser } from '../../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event)
  const attemptId = getRouterParam(event, 'id')
  if (!attemptId || !/^[A-Za-z0-9_-]{1,128}$/.test(attemptId)) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz attempt ID is invalid.' })
  }

  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.doc(`quizAttempts/${attemptId}`).get()
  if (!snapshot.exists) {
    throw createError({ statusCode: 404, statusMessage: 'Quiz result not found.' })
  }

  const result = snapshot.data()!
  if (result.uid !== user.uid && user.admin !== true) {
    throw createError({ statusCode: 403, statusMessage: 'You do not have access to this quiz result.' })
  }

  return { ...result, id: snapshot.id, attempts: result.attemptNumber }
})
