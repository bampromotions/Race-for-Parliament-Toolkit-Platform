import { getFirebaseAdmin, requireRole } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireRole(event, ['admin', 'contentEditor'])
  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.collection('quizQuestions')
    .where('courseId', '==', 'race-for-parliament')
    .get()

  return {
    questions: snapshot.docs.map((document) => {
      const question = document.data()
      return {
        id: document.id,
        moduleId: question.moduleId,
        type: question.type,
        promptEn: question.promptEn,
        promptSt: question.promptSt,
        options: question.options,
      }
    }),
  }
})
