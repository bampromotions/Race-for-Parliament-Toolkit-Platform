import { courseId, courseModules } from '../../../app/data/course'
import { getStaticAnswers } from '../../utils/course-quiz'
import { getFirebaseAdmin, requireRole } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireRole(event, ['admin'])
  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.collection('quizAttempts')
    .where('reviewStatus', '==', 'pending')
    .orderBy('createdAt', 'asc')
    .limit(100)
    .get()
  const moduleIds = [...new Set(snapshot.docs.map((attempt) => attempt.get('moduleId')))]
    .filter((moduleId): moduleId is number => Number.isInteger(moduleId))
  const questionSnapshots = await Promise.all(moduleIds.map((moduleId) =>
    db.collection('quizQuestions')
      .where('courseId', '==', courseId)
      .where('moduleId', '==', moduleId)
      .get()))
  const questionsByModule = new Map(moduleIds.map((moduleId, index) => [
    moduleId,
    questionSnapshots[index].docs,
  ]))

  const attempts = await Promise.all(snapshot.docs.map(async (attempt) => {
    const data = attempt.data()
    const module = courseModules.find((item) => item.id === data.moduleId)
    if (!module || data.courseId !== courseId) return null

    const participant = await db.doc(`users/${data.uid}`).get()
    const questionDetails = [
      ...module.quiz.map((question) => ({
        ...question,
        correctAnswers: getStaticAnswers(data.moduleId)[question.id] ?? [],
      })),
      ...(questionsByModule.get(data.moduleId) ?? []).map((document) => ({
        ...document.data(),
        id: document.id,
      })),
    ]

    return {
      id: attempt.id,
      ...data,
      createdAt: data.createdAt?.toDate?.().toISOString() ?? null,
      participantName: participant.get('displayName') ?? participant.get('email') ?? data.uid,
      moduleTitleEn: module.titleEn,
      moduleTitleSt: module.titleSt,
      questions: questionDetails,
    }
  }))

  return { attempts: attempts.filter((attempt) => attempt !== null) }
})
