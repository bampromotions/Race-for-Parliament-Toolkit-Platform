import { courseId, courseModules } from '../../../../../../app/data/course'
import { getFirebaseAdmin, requireFirebaseUser } from '../../../../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event)
  const requestedCourseId = getRouterParam(event, 'courseId')
  const moduleId = Number(getRouterParam(event, 'moduleId'))
  if (requestedCourseId !== courseId || !Number.isInteger(moduleId)) {
    throw createError({ statusCode: 404, statusMessage: 'Course module not found.' })
  }

  const courseModule = courseModules.find((module) => module.id === moduleId)
  if (!courseModule) throw createError({ statusCode: 404, statusMessage: 'Course module not found.' })

  const { db } = getFirebaseAdmin(event)
  if (moduleId > 1) {
    const progress = await db.doc(`users/${user.uid}/courseProgress/${courseId}`).get()
    const passedModules = progress.data()?.passedModules
    if (!Array.isArray(passedModules) || !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: 'Complete the previous module quiz before opening this module.' })
    }
  }

  const snapshot = await db.collection('quizQuestions')
    .where('courseId', '==', courseId)
    .where('moduleId', '==', moduleId)
    .get()
  const addedQuestions = snapshot.docs.map((document) => {
    const question = document.data()
    return {
      id: document.id,
      moduleId: question.moduleId,
      type: question.type,
      promptEn: question.promptEn,
      promptSt: question.promptSt,
      options: question.options,
    }
  })
  return { questions: [...courseModule.quiz, ...addedQuestions] }
})
