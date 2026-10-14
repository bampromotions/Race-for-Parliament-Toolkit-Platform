import { FieldPath, type DocumentSnapshot, type QueryDocumentSnapshot } from 'firebase-admin/firestore'
import { courseId } from '../../../app/data/course'
import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const query = getQuery(event)
  const cursorId = typeof query.cursor === 'string' ? query.cursor : ''
  let cursor: DocumentSnapshot | undefined
  if (cursorId) {
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(cursorId)) {
      throw createError({ statusCode: 400, statusMessage: 'The participant page cursor is invalid.' })
    }
    const cursorSnapshot = await db.doc(`users/${cursorId}`).get()
    if (!cursorSnapshot.exists) {
      throw createError({ statusCode: 400, statusMessage: 'The participant page cursor is no longer available.' })
    }
    cursor = cursorSnapshot
  }

  const page: QueryDocumentSnapshot[] = []
  while (page.length < 51) {
    let usersQuery = db.collection('users')
      .orderBy(FieldPath.documentId())
      .limit(100)
    if (cursor) usersQuery = usersQuery.startAfter(cursor)

    const snapshot = await usersQuery.get()
    if (snapshot.empty) break
    page.push(...snapshot.docs.filter((profile) => profile.get('role') === 'participant'))
    cursor = snapshot.docs[snapshot.docs.length - 1]
    if (snapshot.size < 100) break
  }

  const hasNextPage = page.length > 50
  const participantsPage = page.slice(0, 50)
  const participants = await Promise.all(participantsPage.map(async (profile) => {
    const progress = await db.doc(`users/${profile.id}/courseProgress/${courseId}`).get()
    const data = progress.data()
    const passedModules = Array.isArray(data?.passedModules) ? data.passedModules : []
    return {
      id: profile.id,
      displayName: profile.get('displayName') ?? '',
      email: profile.get('email') ?? '',
      organisation: profile.get('organisation') ?? '',
      passedModules: passedModules.length,
      scores: data?.scores ?? {},
      status: passedModules.includes(4) ? 'completed' : data ? 'inProgress' : 'notStarted',
    }
  }))

  return {
    participants,
    nextCursor: hasNextPage ? participantsPage[participantsPage.length - 1]?.id ?? null : null,
  }
})
