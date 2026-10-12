import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import type { H3Event } from 'h3'

function getAdminApp(event: H3Event) {
  const existing = getApps().find((app) => app.name === 'race-for-parliament-server')
  if (existing) return existing

  const config = useRuntimeConfig(event)
  const projectId = config.public.firebaseProjectId
  if (!projectId) {
    throw createError({ statusCode: 500, statusMessage: 'Firebase Admin is missing NUXT_PUBLIC_FIREBASE_PROJECT_ID.' })
  }
  const serviceAccountJson = config.firebaseServiceAccountJson
  const credential = serviceAccountJson
    ? cert(JSON.parse(serviceAccountJson))
    : applicationDefault()

  return initializeApp({
    credential,
    projectId,
  }, 'race-for-parliament-server')
}

export function getFirebaseAdmin(event: H3Event) {
  const app = getAdminApp(event)
  return {
    auth: getAuth(app),
    db: getFirestore(app),
  }
}

export async function requireFirebaseUser(event: H3Event) {
  const authorization = getHeader(event, 'authorization')
  const match = authorization?.match(/^Bearer\s+(.+)$/i)
  if (!match) {
    throw createError({ statusCode: 401, statusMessage: 'Authentication is required.' })
  }

  const adminAuth = getFirebaseAdmin(event).auth
  try {
    return await adminAuth.verifyIdToken(match[1], true)
  } catch {
    throw createError({ statusCode: 401, statusMessage: 'The authentication token is invalid or expired.' })
  }
}

export async function requireAdminUser(event: H3Event) {
  const user = await requireFirebaseUser(event)
  if (user.admin !== true) {
    throw createError({ statusCode: 403, statusMessage: 'Administrator access is required.' })
  }
  return user
}
