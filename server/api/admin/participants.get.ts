import { getFirebaseAdmin, requireAdminUser } from '../../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  await requireAdminUser(event)
  const { db } = getFirebaseAdmin(event)
  const query = getQuery(event)
  const cursor = typeof query.cursor === 'string' ? query.cursor : ''
  let participantsQuery = db.collection('users')
    .where('role', '==', 'participant')
    .orderBy('displayName')
  if (cursor) {
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(cursor)) {
      throw createError({ statusCode: 400, statusMessage: 'The participant page cursor is invalid.' })
    }
    const cursorSnapshot = await db.doc(`users/${cursor}`).get()
    if (!cursorSnapshot.exists) {
      throw createError({ statusCode: 400, statusMessage: 'The participant page cursor is no longer available.' })
    }
    participantsQuery = participantsQuery.startAfter(cursorSnapshot)
  }

  const snapshot = await participantsQuery.limit(51).get()
  const page = snapshot.docs.slice(0, 50)
  const participants = await Promise.all(page.map(async (profile) => {
    const progress = await db.doc(`users/${profile.id}/courseProgress/race-for-parliament`).get()
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
    nextCursor: snapshot.docs.length > 50 ? page[page.length - 1]?.id ?? null : null,
  }
})
