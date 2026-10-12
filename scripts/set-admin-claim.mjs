import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

const [uid, action = 'grant'] = process.argv.slice(2)
if (!uid || !/^[A-Za-z0-9_-]{1,128}$/.test(uid) || !['grant', 'revoke'].includes(action)) {
  console.error('Usage: node scripts/set-admin-claim.mjs <firebase-user-id> [grant|revoke]')
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
  const claims = { ...user.customClaims }

  if (action === 'grant') claims.admin = true
  else delete claims.admin

  await auth.setCustomUserClaims(uid, claims)
  console.log(`Admin claim ${action === 'grant' ? 'granted' : 'revoked'} for ${uid}. The user must refresh their ID token.`)
}
