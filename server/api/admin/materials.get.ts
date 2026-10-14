import { courseId } from '../../../app/data/course'
import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const snapshot = await db.collection('courseMaterials')
    .where('courseId', '==', courseId)
    .get()
  return {
    materials: snapshot.docs.map((document) => {
      const material = document.data()
      return {
        id: document.id,
        moduleId: material.moduleId,
        titleEn: material.titleEn,
        titleSt: material.titleSt,
        bodyEn: material.bodyEn,
        bodySt: material.bodySt,
      }
    }),
  }
})
