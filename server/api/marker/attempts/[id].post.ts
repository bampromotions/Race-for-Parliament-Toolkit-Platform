import { FieldValue } from 'firebase-admin/firestore'
import { getFirebaseAdmin, requireRole } from '../../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const admin = await requireRole(event, ['admin'])
  const attemptId = getRouterParam(event, 'id')
  if (!attemptId || !/^[A-Za-z0-9_-]{1,128}$/.test(attemptId)) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz attempt ID is invalid.' })
  }

  const body = await readBody<{ score?: unknown; feedback?: unknown }>(event)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'The marking submission is invalid.' })
  }
  if (!Number.isInteger(body?.score) || (body.score as number) < 0 || (body.score as number) > 100) {
    throw createError({ statusCode: 400, statusMessage: 'The marked score must be a whole number from 0 to 100.' })
  }
  if (body.feedback !== undefined && (typeof body.feedback !== 'string' || body.feedback.length > 1000)) {
    throw createError({ statusCode: 400, statusMessage: 'Admin feedback must be 1,000 characters or fewer.' })
  }

  const { db } = getFirebaseAdmin(event)
  const score = body.score as number
  const passed = score >= 70
  const attemptRef = db.doc(`quizAttempts/${attemptId}`)
  await db.runTransaction(async (transaction) => {
    const attemptSnapshot = await transaction.get(attemptRef)
    if (!attemptSnapshot.exists) {
      throw createError({ statusCode: 404, statusMessage: 'Quiz attempt not found.' })
    }
    const attempt = attemptSnapshot.data()!
    if (attempt.reviewStatus !== 'pending') {
      throw createError({ statusCode: 409, statusMessage: 'This quiz attempt is not waiting to be marked.' })
    }
    if (typeof attempt.uid !== 'string' || typeof attempt.moduleId !== 'number' || typeof attempt.courseId !== 'string') {
      throw createError({ statusCode: 500, statusMessage: 'The quiz attempt data is invalid.' })
    }

    const moduleAttempts = await transaction.get(
      db.collection('quizAttempts')
        .where('uid', '==', attempt.uid)
        .where('moduleId', '==', attempt.moduleId),
    )
    const progressRef = db.doc(`users/${attempt.uid}/courseProgress/${attempt.courseId}`)
    const progressSnapshot = await transaction.get(progressRef)
    const progress = progressSnapshot.data() ?? {}
    const anotherPassingAttempt = moduleAttempts.docs.some((document) =>
      document.id !== attemptId && document.get('courseId') === attempt.courseId && document.get('passed') === true)
    const modulePassed = passed || anotherPassingAttempt
    const passedModules = Array.isArray(progress.passedModules)
      ? progress.passedModules.filter((value): value is number => Number.isInteger(value))
      : []
    const nextPassedModules = modulePassed
      ? [...new Set([...passedModules, attempt.moduleId])].sort((a, b) => a - b)
      : passedModules.filter((moduleId) => moduleId < attempt.moduleId)

    const progressUpdate: Record<string, unknown> = {
      passedModules: nextPassedModules,
      updatedAt: FieldValue.serverTimestamp(),
    }
    if (progress.latestAttemptId === attemptId) {
      progressUpdate.scores = { ...(progress.scores ?? {}), [String(attempt.moduleId)]: score }
    }

    transaction.update(attemptRef, {
      score,
      passed,
      reviewStatus: 'reviewed',
      reviewedBy: admin.uid,
      reviewedAt: FieldValue.serverTimestamp(),
      reviewerFeedback: typeof body.feedback === 'string' ? body.feedback.trim() : '',
    })
    transaction.set(progressRef, progressUpdate, { merge: true })
  })

  return { id: attemptId, score, passed, reviewStatus: 'reviewed' }
})
