import { getFirebaseAdmin, requireRole } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireRole(event, ['participant'])
  const quizId = getRouterParam(event, 'id')
  if (!quizId || !/^[A-Za-z0-9_-]{1,128}$/.test(quizId)) {
    throw createError({ statusCode: 404, statusMessage: 'Quiz not found.' })
  }

  const snapshot = await getFirebaseAdmin(event).db.doc(`standaloneQuizzes/${quizId}`).get()
  if (!snapshot.exists || snapshot.get('published') !== true) {
    throw createError({ statusCode: 404, statusMessage: 'Quiz not found.' })
  }

  const quiz = snapshot.data()!
  const questions = Array.isArray(quiz.questions)
    ? quiz.questions.map(({ correctAnswers: _correctAnswers, ...question }) => question)
    : []

  return {
    id: snapshot.id,
    titleEn: quiz.titleEn,
    titleSt: quiz.titleSt,
    questions,
  }
})
