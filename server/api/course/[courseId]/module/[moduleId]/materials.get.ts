import { courseId, courseModules } from '../../../../../../app/data/course'
import { getFirebaseAdmin, requireRole } from '../../../../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ['participant'])
  const requestedCourseId = getRouterParam(event, 'courseId')
  const moduleId = Number(getRouterParam(event, 'moduleId'))
  if (requestedCourseId !== courseId || !Number.isInteger(moduleId)) {
    throw createError({ statusCode: 404, statusMessage: 'Course module not found.' })
  }
  if (!courseModules.some((module) => module.id === moduleId)) {
    throw createError({ statusCode: 404, statusMessage: 'Course module not found.' })
  }

  const { db } = getFirebaseAdmin(event)
  if (moduleId > 1) {
    const progress = await db.doc(`users/${user.uid}/courseProgress/${courseId}`).get()
    const passedModules = progress.data()?.passedModules
    if (!Array.isArray(passedModules) || !passedModules.includes(moduleId - 1)) {
      throw createError({ statusCode: 403, statusMessage: 'Complete the previous module quiz before opening this module.' })
    }
  }

  const snapshot = await db.collection('courseMaterials')
    .where('courseId', '==', courseId)
    .where('moduleId', '==', moduleId)
    .get()
  return {
    materials: snapshot.docs.map((document) => {
      const material = document.data()
      return {
        id: document.id,
        titleEn: material.titleEn,
        titleSt: material.titleSt,
        bodyEn: material.bodyEn,
        bodySt: material.bodySt,
      }
    }),
  }
})
