import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

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
  const credential = serviceAccountJson
    ? cert(JSON.parse(serviceAccountJson))
    : applicationDefault()
  const app = getApps()[0] ?? initializeApp({ credential, projectId })
  const auth = getAuth(app)
  const user = await auth.getUser(uid)
  const profileRef = getFirestore(app).doc(`users/${uid}`)
  const profile = await profileRef.get()
  if (!profile.exists) throw new Error(`No registered profile exists for ${uid}.`)
  const claims = { ...user.customClaims }

  delete claims.admin
  if (role === 'admin') claims.admin = true
  if (role !== 'participant') claims.role = role
  else delete claims.role

  await auth.setCustomUserClaims(uid, claims)
  await profileRef.update({ role })
  console.log(`Role ${role} assigned to ${uid}. The user must refresh their ID token.`)
}
