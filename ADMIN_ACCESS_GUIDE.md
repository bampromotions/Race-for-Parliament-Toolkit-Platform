# Website access and Admin setup

This guide covers how people access the Race for Parliament Toolkit, how to grant
staff access, and why the Firebase Admin service-account key must be kept as a
secret.

## Access the website

1. Open the website's deployed URL, or use `http://localhost:3000` while running
   the development server.
2. Create an account at `/auth/register`, or sign in at `/auth/login` if you
   already have one.
3. New accounts are always **Participants**. They can study the course, take
   quizzes, and follow their saved progress.
4. Staff sign in through the same login page. Once their role has been assigned
   and their session refreshed, the website makes the pages and actions for
   their role available.

If a page redirects you to the dashboard or login page, sign in with the
correct account and check with a trusted operator that the appropriate staff
role was assigned.

## Create the first Admin

There is no public Admin sign-up. A trusted operator creates or promotes an
account using the Firebase Admin SDK from a secured environment.

### 1. Set up the Firebase project

- Enable **Authentication → Sign-in method → Email/Password** in Firebase
  Console.
- Add the deployed website's domain under **Authentication → Settings →
  Authorized domains**.
- Configure the Firebase Web App settings using `.env.example` as a template.
  These `NUXT_PUBLIC_FIREBASE_*` settings identify the web app; they are not
  Admin credentials.
- Deploy Firestore security rules and indexes as described in
  [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

### 2. Configure the server credential

The server and the role-assignment script need a Firebase Admin credential to
verify Firebase ID tokens, set custom claims, and make trusted server-side
Firestore updates. The browser must never receive this credential.

Choose one of these credential methods:

- **Deployment (recommended):** In your hosting provider's environment-variable
  or secrets settings, create a protected secret named
  `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON`. Set its value to the complete JSON
  content of a service-account private key. Make it available to the server
  runtime. Do not add the key to `NUXT_PUBLIC_*` variables.
- **Local development:** Prefer Application Default Credentials configured for
  the Firebase project. Both the server and role-assignment script can also
  read the ignored root file
  `raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json` if present.
  Alternatively, set `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` in your local
  `.env`.

If you need to create a key, open **Firebase Console → Project settings →
Service accounts → Firebase Admin SDK → Generate new private key**. Store the
downloaded JSON securely and transfer its complete contents to the secret
store; never paste the private key into source code, chat, tickets, or a
public/client environment variable. Limit access to the secret to trusted
operators and the server runtime.

The filename is only a local file name. The key itself gives privileged access
to the Firebase project; creating it does **not** create an Admin user or grant
an account the Admin role. In production, use the hosting provider's secret
store or its supported Application Default Credentials instead of deploying a
key file.

### 3. Find the account to promote

The person can register through `/auth/register`, or a trusted operator can
create their account in Firebase Console under **Authentication → Users**. In
either case, copy the Firebase **User UID**. If the account exists only in
Authentication and does not yet have a `users/{uid}` Firestore document, the
role-assignment command below creates the profile as part of explicitly
assigning the role.

### 4. Assign the Admin role

From the project root, run this command in an operator environment with
`NUXT_PUBLIC_FIREBASE_PROJECT_ID` and either
`NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` or Application Default Credentials
configured:

```sh
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> admin
```

Replace `<firebase-user-id>` with the copied UID, without angle brackets. The
script sets the Firebase custom claims and updates the user's profile role.
If the user does not yet have a Firestore profile, it creates one using their
Firebase Authentication UID, display name, and email (with safe defaults for
missing values). The account must already exist in Firebase Authentication.

Signing in alone does not grant Admin access. The login page reads the role
from the Firebase ID token's custom claims; without an Admin claim the app
correctly treats the account as a Participant. Assigning a role with this
operator command is the explicit step that grants access. The command also
creates the profile needed by the Admin area.

After the command succeeds, have the user sign out and sign back in so Firebase
issues a refreshed ID token. They can then open `/admin`.

### If the account still opens the Participant dashboard

Signing in does not automatically promote an account. The Firebase ID token
must contain the Admin custom claim, which is added by running the operator
command above for the correct Firebase project and User UID. Check that the
command completed successfully, verify that the app is configured for that
same Firebase project, deploy the updated app, then sign out and back in. If
the custom claim is absent, the app intentionally treats the account as a
Participant rather than granting Admin based on an Authentication account or
Firestore profile alone.

## Other staff roles

Use the same command with the role that matches the person's duties:

```sh
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> contentEditor
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> marker
```

To remove staff access and return the account to the Participant role:

```sh
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> participant
```

The user must sign out and back in after any role change.

| Role | Access |
| --- | --- |
| `admin` | Manage lesson materials, monitor participants and results, and manage course content. |
| `contentEditor` | Create and manage quiz questions. |
| `marker` | Review quiz attempts and confirm or adjust marking. |
| `participant` | Take courses and quizzes and view personal progress. |

Role claims are checked by both staff pages and server APIs. Changing a profile
field in Firestore does not grant staff access.

## Protect and rotate credentials

- Never commit a service-account JSON file or put its contents in source
  control. The provided root key filename is ignored by `.gitignore`, but that
  is not a replacement for keeping the key private.
- Do not share or log service-account JSON, private keys, or the value of
  `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON`.
- If a key was committed, uploaded publicly, or shared with an untrusted
  person, revoke/delete it in Google Cloud IAM, create a replacement, update
  the deployment secret, and redeploy. Removing the file from the latest
  commit alone does not invalidate the exposed key.
- Keep the Firebase Web App configuration separate from the Admin SDK
  credential. Web app configuration is used by the browser; security rules,
  verified ID tokens, and server-side role checks enforce access.
