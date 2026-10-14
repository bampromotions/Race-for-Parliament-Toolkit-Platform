import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const snapshot = await getFirebaseAdmin(event).db.collection('standaloneQuizzes').get()

  return {
    quizzes: snapshot.docs.map((document) => {
      const quiz = document.data()
      return {
        id: document.id,
        titleEn: quiz.titleEn,
        titleSt: quiz.titleSt,
        questionCount: Array.isArray(quiz.questions) ? quiz.questions.length : 0,
        published: quiz.published === true,
      }
    }),
  }
})
