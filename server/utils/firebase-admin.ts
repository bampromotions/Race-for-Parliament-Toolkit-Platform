import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { applicationDefault, cert, getApps, initializeApp, type ServiceAccount } from 'firebase-admin/app'
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
    const serviceAccount = {
      type: 'service_account',
      project_id: 'raceforpalament-39d8d',
      private_key_id: 'bcfdae06a592b166c7972d66a28f5f581790cdfa',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDZ7cmckirDF/Mk\nE1ll7MHtOV4Tk5qJkHQ13IB9z0EP9IwU7E47npGJbhScsijUssZvL3PkqddBGNrq\nXroB9pNgjNzg05duUVHyTusvCwZwvQ9wFaKvhMMRj4JXrpfpqvNVHSNq05re2IZa\n8mThMt4GDnYZr/Uzj91v/GJ+leHVumbEyGwa9qM2RmI34dQgmet0TjLnwFBgoasp\n2ZtHrjf3S8+m2Qj9QDZQdftLp+HIBgGjRl3q2tRUvynybPrI6SXF6MY4WWjIZTZb\nxMSQE9EwDQ02jfkLl3FzZjRRXmaEuV9Dcy0AddqZlkCRlVmL3ATmPIuoGqZZrNwy\nf6aTicNtAgMBAAECggEAJgZKdko+sdm87998ar9buvOWiZ3oifYtgLRfqxP9izYl\nNwVgRSDOzgbqC8k+PJaQ7xd9hjloOJCIqforRGpsnp0VcRkaRAJmZPwGJygqUIN8\nbRcpUqy8iJTcrkXldb0BRimWY25WiGmJT9cZaP3CJZZiXusHwp5oicCkwueOBwdz\nr+9QC7YyRrFws2Izc2J2jzU/YXN76dIYSkjye6lLU383JY0nyNwU3ce4NsmE94fu\nn85zaU0VNEehgfBrtPv6xSKFsPE0M0qZ6ZAmpLR284tDNzJ53Fw5qzMNOQonQm4Y\nsT+d9w41RAaajzkF8WCPpdeEvNbPukvMPWuRkVJ6QQKBgQDy0QL4FzJneZmYdjJK\nNNJIPo/sbbo/MN+ptmPaEYP/EBL3ayY9uzRvSDUp4CVtoKoZ3i9zraqwgiovV25g\n6bclexlFZP7btuKB1/Kb5a9iOYFoyHeo2WIjT4F0s8hNMZL73HeLdzRYbLAebIfe\nB/3Ugj0fpJNdmQddIrtRiVeC3QKBgQDlwtrVZj5KLeqz7sxsFn83LPjCqpXDhI+n\nZn4LE48Zp7Jk1NJO1BUB2NiPXaKm/pJH6EIpn5HTx4x0PvBqVZZB6Dt1jekLMB5c\nNx7JTGhWKFpIkG+0c1qI64c/zccqWTs6bPQU5+Iyt50/z9sEfqPvug0cLBrCfiqf\nS2lIanBR0QKBgQCHk/7VaZZiQnppr616062KWyxfdhElUXPBPi7YxyjtlRsR/UkX\n9NxdOnM804Pyh2ATG4VhUNnavoMxdd8Sy8zQZ8B/h9np8l7c4yf6ti/MZ5GDYVO2\n+tIaJz2AXRX9TC3m5X32aHPY368i/bSLW+j17FaWwXzrKRP8g/UVnNs5HQKBgESg\nYeqxolNXya262vZB9feOCDNk7ly64ImYtHcsfWalT0SMyNBgynGFypFv32BP03OE\n7RYvokgGZ25lSjwImlvPOMtQ+tWrprXWhOyNVPC/FtBry+GzPsx8xSYKmb2Nb4Jw\n/qqr5EVP0Lk5pWp/RQoaoUXT6p5DPwnbZXQKzsexAoGBALQTVez2v1hI3L08Grds\nGw28H0xeFKJu16t+Mc5e0yO01kzx86lh7qwRUFvX92XWZ9QZGbfbWbheo9che1pv\nI3kwNuxvOcfDnVTxxLz2lUMgNzAviXSAi3B8fsUvgt99sc/Nbq41sLn+eql6TX6o\nsh0xmtRdcGCusQ1RMqS7SlUj\n-----END PRIVATE KEY-----\n',
      client_email: 'firebase-adminsdk-fbsvc@raceforpalament-39d8d.iam.gserviceaccount.com',
      client_id: '111586376570843968709',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40raceforpalament-39d8d.iam.gserviceaccount.com',
      universe_domain: 'googleapis.com',
    }

    let credential = cert(serviceAccount as ServiceAccount);


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
    return await adminAuth.verifyIdToken(match[1]!, true)
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
        statusMessage: 'Firebase Admin credentials are unavailable or invalid.',
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
