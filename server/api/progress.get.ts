import { useLogger } from '../../app/composables/useLogger'
import { requireFirebaseUser, getFirebaseAdmin } from '../utils/firebase-admin'

export default defineEventHandler(async (event) => {
  const user = await requireFirebaseUser(event)
  const { db } = getFirebaseAdmin(event)

  try {
    const snapshot = await db.doc(`users/${user.uid}/courseProgress/race-for-parliament`).get()

    return snapshot.exists
      ? snapshot.data()
      : { passedModules: [], scores: {}, attemptsByModule: {}, latestAttemptId: null }
  } catch (error) {
    const { log } = useLogger()
    log('error', 'Failed to fetch progress data', {
      errorName: error instanceof Error ? error.name : 'UnknownError',
      errorMessage: error instanceof Error ? error.message : String(error),
    })
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch progress data',
    })
  }
})
