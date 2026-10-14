import { FieldValue } from 'firebase-admin/firestore'
import { getFirebaseAdmin, requireRole } from '../../../utils/firebase-admin'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export default defineEventHandler(async (event) => {
  const participant = await requireRole(event, ['participant'])
  const quizId = getRouterParam(event, 'id')
  if (!quizId || !/^[A-Za-z0-9_-]{1,128}$/.test(quizId)) {
    throw createError({ statusCode: 404, statusMessage: 'Quiz not found.' })
  }

  const body = await readBody<unknown>(event)
  if (!isRecord(body) || !isRecord(body.answers)) {
    throw createError({ statusCode: 400, statusMessage: 'Quiz answers are invalid.' })
  }

  const { db } = getFirebaseAdmin(event)
  const quizSnapshot = await db.doc(`standaloneQuizzes/${quizId}`).get()
  if (!quizSnapshot.exists || quizSnapshot.get('published') !== true) {
    throw createError({ statusCode: 404, statusMessage: 'Quiz not found.' })
  }

  const questions = quizSnapshot.get('questions')
  if (!Array.isArray(questions) || questions.length === 0) {
    throw createError({ statusCode: 500, statusMessage: 'This quiz has no valid questions.' })
  }

  const questionIds = new Set(questions.map((question) => question.id))
  const submittedIds = Object.keys(body.answers)
  if (submittedIds.length !== questionIds.size
    || submittedIds.some((id) => !questionIds.has(id))) {
    throw createError({ statusCode: 400, statusMessage: 'Answer every question before submitting.' })
  }

  let correctCount = 0
  const answers: Record<string, string[]> = {}
  for (const question of questions) {
    const answer = body.answers[question.id]
    if (!Array.isArray(answer)
      || answer.length === 0
      || answer.length > question.options.length
      || answer.some((value: unknown) => typeof value !== 'string')
      || new Set(answer).size !== answer.length
      || answer.some((value: string) => !question.options.some((option: { value: string }) => option.value === value))) {
      throw createError({ statusCode: 400, statusMessage: 'Quiz answers are invalid.' })
    }

    answers[question.id] = answer
    const submitted = [...answer].sort()
    const expected = [...question.correctAnswers].sort()
    if (JSON.stringify(submitted) === JSON.stringify(expected)) correctCount += 1
  }

  const score = Math.round((correctCount / questions.length) * 100)
  const attempt = db.collection('standaloneQuizAttempts').doc()
  await attempt.create({
    quizId,
    quizTitleEn: quizSnapshot.get('titleEn'),
    quizTitleSt: quizSnapshot.get('titleSt'),
    uid: participant.uid,
    answers,
    questionCount: questions.length,
    score,
    passed: score >= 70,
    createdAt: FieldValue.serverTimestamp(),
  })

  return { score, passed: score >= 70, questionCount: questions.length }
})
