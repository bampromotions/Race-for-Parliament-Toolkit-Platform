import { FieldValue } from 'firebase-admin/firestore'
import { courseId, courseModules } from '../../../app/data/course'
import { getStaticAnswers } from '../../utils/course-quiz'
import { getFirebaseAdmin, requireRole } from '../../utils/firebase-admin'

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ['participant'])
  const body = await readBody<{ courseId?: unknown; moduleId?: unknown; answers?: unknown }>(event)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'The quiz submission is invalid.' })
  }
  const moduleId = body?.moduleId
  const expectedAnswers = typeof moduleId === 'number' ? getStaticAnswers(moduleId) : undefined

  if ((body.courseId !== undefined && body.courseId !== courseId)
    || typeof moduleId !== 'number'
    || !Number.isInteger(moduleId)
    || !expectedAnswers
    || !body.answers
    || typeof body.answers !== 'object'
    || Array.isArray(body.answers)) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz submission is invalid.' })
  }

  const answers = body.answers as Record<string, unknown>
  const { db } = getFirebaseAdmin(event)
  const module = courseModules.find((item) => item.id === moduleId)!
  const addedQuestionsSnapshot = await db.collection('quizQuestions')
    .where('courseId', '==', courseId)
    .where('moduleId', '==', moduleId)
    .get()
  const allQuestionIds = new Set([
    ...module.quiz.map((question) => question.id),
    ...addedQuestionsSnapshot.docs.map((question) => question.id),
  ])
  if (Object.keys(answers).length > allQuestionIds.size
    || Object.keys(answers).some((questionId) => !allQuestionIds.has(questionId))
    || Object.values(answers).some((answer) => !isStringArray(answer) || answer.length > 10 || answer.some((value) => value.length > 100))) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz answers are invalid.' })
  }

  const answerKey = { ...expectedAnswers }
  const allowedOptions = new Map(module.quiz.map((question) => [
    question.id,
    new Set(question.options.map((option) => option.value)),
  ]))
  for (const document of addedQuestionsSnapshot.docs) {
    const question = document.data()
    if (!isStringArray(question.correctAnswers)
      || question.correctAnswers.length === 0
      || !Array.isArray(question.options)
      || !question.options.every((option: unknown) => typeof option === 'object' && option !== null && 'value' in option && typeof option.value === 'string')) {
      throw createError({ statusCode: 500, statusMessage: 'A saved quiz question is invalid.' })
    }
    answerKey[document.id] = question.correctAnswers
    allowedOptions.set(document.id, new Set(question.options.map((option: { value: string }) => option.value)))
  }

  if (Object.entries(answers).some(([questionId, answer]) =>
    (answer as string[]).some((value) => !allowedOptions.get(questionId)?.has(value)))) {
    throw createError({ statusCode: 400, statusMessage: 'The quiz answers are invalid.' })
  }

  const correctCount = Object.entries(answerKey).reduce((total, [questionId, correct]) => {
    const submitted = [...((answers[questionId] as string[] | undefined) ?? [])].sort()
    return total + (JSON.stringify(submitted) === JSON.stringify([...correct].sort()) ? 1 : 0)
  }, 0)
  const score = Math.round((correctCount / Object.keys(answerKey).length) * 100)
  const passed = score >= 70
  const progressRef = db.doc(`users/${user.uid}/courseProgress/${courseId}`)
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
      answers,
      reviewStatus: 'pending',
      automaticScore: score,
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
