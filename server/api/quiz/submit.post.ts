import { FieldValue } from 'firebase-admin/firestore'
import { getFirebaseAdmin, requireFirebaseUser } from '../../utils/firebase-admin'

const answerKeys: Record<number, Record<string, string[]>> = {
  1: { m1q1: ['a'], m1q2: ['true'], m1q3: ['respect-law', 'vote'] },
  2: { m2q1: ['be-registered'], m2q2: ['true'] },
  3: { m3q1: ['evidence'], m3q2: ['consultation', 'petition'] },
  4: { m4q1: ['transparency'], m4q2: ['true'] },
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

export default defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event)
  const body = await readBody<{ moduleId?: unknown; answers?: unknown }>(event)
  const moduleId = body?.moduleId
  const expectedAnswers = typeof moduleId === 'number' ? answerKeys[moduleId] : undefined

  if (typeof moduleId !== 'number' || !Number.isInteger(moduleId) || !expectedAnswers || !body.answers || typeof body.answers !== 'object' || Array.isArray(body.answers)) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz submission is invalid.' })
  }

  const answers = body.answers as Record<string, unknown>
  if (Object.keys(answers).length > Object.keys(expectedAnswers).length
    || Object.keys(answers).some((questionId) => !(questionId in expectedAnswers))
    || Object.values(answers).some((answer) => !isStringArray(answer) || answer.length > 10 || answer.some((value) => value.length > 100))) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz answers are invalid.' })
  }

  const correctCount = Object.entries(expectedAnswers).reduce((total, [questionId, correct]) => {
    const submitted = [...((answers[questionId] as string[] | undefined) ?? [])].sort()
    return total + (JSON.stringify(submitted) === JSON.stringify([...correct].sort()) ? 1 : 0)
  }, 0)
  const score = Math.round((correctCount / Object.keys(expectedAnswers).length) * 100)
  const passed = score >= 70
  const { db } = getFirebaseAdmin(event)
  const progressRef = db.doc(`users/${user.uid}/courseProgress/race-for-parliament`)
  const attemptRef = db.collection('quizAttempts').doc()

  const attempts = await db.runTransaction(async (transaction) => {
    const progressSnapshot = await transaction.get(progressRef)
    const progress = progressSnapshot.data() ?? {}
    const passedModules = Array.isArray(progress.passedModules)
      ? progress.passedModules.filter((value): value is number => Number.isInteger(value))
      : []

    if (moduleId > 1 && !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: 'Complete the previous module quiz before starting this one.' })
    }

    const attemptsByModule = progress.attemptsByModule && typeof progress.attemptsByModule === 'object'
      ? progress.attemptsByModule as Record<string, number>
      : {}
    const attemptNumber = (Number(attemptsByModule[String(moduleId)]) || 0) + 1
    if (passed && !passedModules.includes(moduleId)) passedModules.push(moduleId)

    transaction.create(attemptRef, {
      uid: user.uid,
      courseId: 'race-for-parliament',
      moduleId,
      attemptNumber,
      score,
      passed,
      createdAt: FieldValue.serverTimestamp(),
    })
    transaction.set(progressRef, {
      passedModules,
      scores: { ...(progress.scores ?? {}), [String(moduleId)]: score },
      attemptsByModule: { ...attemptsByModule, [String(moduleId)]: attemptNumber },
      latestAttemptId: attemptRef.id,
      updatedAt: FieldValue.serverTimestamp(),
    }, { merge: true })

    return attemptNumber
  })

  return { attemptId: attemptRef.id, moduleId, score, passed, attempts }
})
