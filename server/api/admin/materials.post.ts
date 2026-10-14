import { FieldValue } from 'firebase-admin/firestore'
import { courseId, courseModules } from '../../../app/data/course'
import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

function invalidMaterial(): never {
  throw createError({ statusCode: 400, statusMessage: 'The course material is invalid.' })
}

export default defineEventHandler(async (event) => {
  const user = await requireAdminUser(event)
  const body = await readBody<{
    moduleId?: unknown
    titleEn?: unknown
    titleSt?: unknown
    bodyEn?: unknown
    bodySt?: unknown
  }>(event)
  if (!body || typeof body !== 'object') invalidMaterial()

  const { moduleId, titleEn, titleSt, bodyEn, bodySt } = body
  if (typeof moduleId !== 'number'
    || !Number.isInteger(moduleId)
    || !courseModules.some((module) => module.id === moduleId)
    || typeof titleEn !== 'string'
    || titleEn.trim().length === 0
    || titleEn.length > 200
    || typeof titleSt !== 'string'
    || titleSt.trim().length === 0
    || titleSt.length > 200
    || typeof bodyEn !== 'string'
    || bodyEn.trim().length === 0
    || bodyEn.length > 8000
    || typeof bodySt !== 'string'
    || bodySt.trim().length === 0
    || bodySt.length > 8000) {
    invalidMaterial()
  }

  const { db } = getFirebaseAdmin(event)
  const materialRef = db.collection('courseMaterials').doc()
  await materialRef.create({
    courseId,
    moduleId,
    titleEn: titleEn.trim(),
    titleSt: titleSt.trim(),
    bodyEn: bodyEn.trim(),
    bodySt: bodySt.trim(),
    createdBy: user.uid,
    createdAt: FieldValue.serverTimestamp(),
  })
  return { id: materialRef.id }
})
