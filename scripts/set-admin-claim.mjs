import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'

const serviceAccountPath = resolve(process.cwd(), 'raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json')
const [uid, requestedRole = 'admin'] = process.argv.slice(2)
const roles = ['admin', 'contentEditor', 'marker', 'participant']
const role = requestedRole === 'grant'
  ? 'admin'
  : requestedRole === 'revoke'
    ? 'participant'
    : requestedRole
if (!uid || !/^[A-Za-z0-9_-]{1,128}$/.test(uid) || !roles.includes(role)) {
  console.error('Usage: node scripts/set-admin-claim.mjs <firebase-user-id> [admin|contentEditor|marker|participant|grant|revoke]')
  process.exitCode = 1
} else {
  const projectId = process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID
  if (!projectId) throw new Error('Set NUXT_PUBLIC_FIREBASE_PROJECT_ID before running this command.')

  const serviceAccountJson = process.env.NUXT_FIREBASE_SERVICE_ACCOUNT_JSON
  let credential
  if (serviceAccountJson) {
    credential = cert(JSON.parse(serviceAccountJson))
  } else if (existsSync(serviceAccountPath)) {
    credential = cert(JSON.parse(readFileSync(serviceAccountPath, 'utf8')))
  } else {
    credential = applicationDefault()
  }
  const app = getApps()[0] ?? initializeApp({ credential, projectId })
  const auth = getAuth(app)
  const user = await auth.getUser(uid)
  const profileRef = getFirestore(app).doc(`users/${uid}`)
  const profile = await profileRef.get()
  const claims = { ...user.customClaims }

  delete claims.admin
  if (role === 'admin') claims.admin = true
  if (role !== 'participant') claims.role = role
  else delete claims.role

  if (profile.exists) {
    await profileRef.update({ role, updatedAt: FieldValue.serverTimestamp() })
  } else {
    await profileRef.set({
      uid: user.uid,
      displayName: user.displayName?.trim() || user.email?.split('@')[0] || user.uid,
      email: user.email ?? '',
      organisation: '',
      preferredLanguage: 'en',
      role,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })
  }
  await auth.setCustomUserClaims(uid, claims)
  console.log(`Role ${role} assigned to ${uid}${profile.exists ? '' : ' and a Firestore profile was created'}. The user must refresh their ID token.`)
}
