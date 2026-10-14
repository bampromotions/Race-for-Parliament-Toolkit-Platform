import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'
import { useLogger } from '../../app/composables/useLogger'
import type { UserRole } from '../../app/types/firebase'
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
  const serviceAccountPath = resolve(process.cwd(), 'raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json')
  let credential

  if (serviceAccountJson) {
    try {
      credential = cert(JSON.parse(serviceAccountJson))
    } catch {
      throw createError({ statusCode: 500, statusMessage: 'NUXT_FIREBASE_SERVICE_ACCOUNT_JSON is not valid service-account JSON.' })
    }
  } else if (existsSync(serviceAccountPath)) {
    try {
      credential = cert(JSON.parse(readFileSync(serviceAccountPath, 'utf8')))
    } catch {
      throw createError({ statusCode: 500, statusMessage: 'The root Firebase service-account file is not valid service-account JSON.' })
    }
  } else {
    credential = applicationDefault()
  }

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
  } catch (error) {
    const code = typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'string'
      ? error.code
      : undefined
    const invalidTokenCodes = new Set([
      'auth/argument-error',
      'auth/id-token-expired',
      'auth/id-token-revoked',
      'auth/invalid-id-token',
      'auth/user-disabled',
      'auth/user-not-found',
    ])
    if (!code || !invalidTokenCodes.has(code)) {
      const { log } = useLogger()
      log('error', 'Firebase ID token verification failed', {
        errorCode: code ?? 'unknown',
        errorName: error instanceof Error ? error.name : 'UnknownError',
      })
      throw createError({
        statusCode: 503,
        statusMessage: 'Firebase Admin credentials are unavailable. Configure NUXT_FIREBASE_SERVICE_ACCOUNT_JSON or Application Default Credentials.',
      })
    }

    throw createError({ statusCode: 401, statusMessage: 'The authentication token is invalid or expired.' })
  }
}

export async function requireRole(event: H3Event, allowedRoles: UserRole[]) {
  const user = await requireFirebaseUser(event)
  const profile = await getFirebaseAdmin(event).db.doc(`users/${user.uid}`).get()
  if (!profile.exists) {
    throw createError({ statusCode: 403, statusMessage: 'A user profile is required to access this resource.' })
  }
  const role: UserRole = profile.get('role') === 'admin' ? 'admin' : 'participant'
  if (!allowedRoles.includes(role)) {
    throw createError({ statusCode: 403, statusMessage: 'You do not have permission to perform this action.' })
  }
  return { ...user, role }
}

export function requireAdminUser(event: H3Event) {
  return requireRole(event, ['admin'])
}
