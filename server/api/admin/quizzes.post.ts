import { FieldValue } from 'firebase-admin/firestore'
import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'
import { validateStandaloneQuiz } from '../../utils/standalone-quiz'

export default defineEventHandler(async (event) => {
  const admin = await requireAdminUser(event)
  const quiz = validateStandaloneQuiz(await readBody<unknown>(event))
  const reference = getFirebaseAdmin(event).db.collection('standaloneQuizzes').doc()

  await reference.create({
    ...quiz,
    published: true,
    createdBy: admin.uid,
    createdAt: FieldValue.serverTimestamp(),
  })

  return { id: reference.id }
})
