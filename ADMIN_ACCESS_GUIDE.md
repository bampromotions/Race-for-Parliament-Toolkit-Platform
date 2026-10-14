# Website access and Admin setup

The application has exactly two roles: `participant` and `admin`. Participants
register on the website. A trusted operator creates Admin accounts manually in
Firebase Authentication and Firestore.

## Access the website

1. Open the deployed website, or use `http://localhost:3000` during local
   development.
2. Register at `/auth/register` to create a Participant account, or sign in at
   `/auth/login`.
3. Participants can study the course, take quizzes, and view their progress.
   Admins use the same login page and can manage lesson materials, questions,
   participants, results, and quiz marking.

## Configure Firebase

1. Enable **Authentication → Sign-in method → Email/Password** in Firebase
   Console.
2. Add the deployed website domain under **Authentication → Settings →
   Authorized domains**.
3. Configure the Firebase Web App settings using `.env.example`. The
   `NUXT_PUBLIC_FIREBASE_*` values identify the web app; they do not grant
   Admin access.
4. Configure the Firebase Admin SDK credential for the server. In deployment,
   use a protected secret named `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` or the
   hosting provider's Application Default Credentials. For local development,
   prefer Application Default Credentials; the server also reads the ignored
   root file
   `raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json` when
   present.
5. Deploy Firestore rules and indexes:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

## Create an Admin manually

Creating an account in Firebase Authentication alone does not make it an
Admin. The app reads the role from the Firestore profile `users/{uid}`.

1. In Firebase Console, open **Authentication → Users** and create the
   Admin's account. Copy its **User UID**.
2. Open **Firestore Database → Data** and create a document in the existing
   `users` collection. Use the exact Authentication UID as the document ID.
   Do not create a separate `admins` collection.
3. Add these fields:

   | Field | Type | Value |
   | --- | --- | --- |
   | `uid` | string | The Firebase Authentication UID |
   | `displayName` | string | The Admin's name |
   | `email` | string | The same email as the Authentication account |
   | `organisation` | string | Organisation name, or an empty string |
   | `preferredLanguage` | string | `en` or `st` |
   | `role` | string | `admin` |

4. Have the Admin sign out and back in. The app reads `users/{uid}.role` and
   routes the Admin to `/admin`.

If the account still opens the Participant dashboard, check the Firestore
document ID exactly matches the Firebase Authentication UID, the document is
inside `users`, and the `role` field is the lowercase string `admin`. Check
that the site is configured for the same Firebase project, then sign out and
back in.

If the app reports that `users/<uid>` was not found, copy the UID from
**Authentication → Users** and create that exact document in the `users`
collection. A document under a different collection or with a different
document ID does not count. The app displays the UID/path it tried to read.

## Roles and permissions

| Role | Access |
| --- | --- |
| `participant` | Study course materials, take quizzes, and view personal progress. |
| `admin` | Create and publish standalone quizzes; manage lesson materials and course quiz questions; monitor participants, progress, and results; review and mark quizzes. |

Admins create standalone quizzes from **Administration → Quizzes → Create a
standalone quiz**. Each quiz has English and Sesotho titles and one or more
bilingual single-choice, multiple-choice, or true/false questions. A new quiz
is published immediately and appears in the Participant **Quizzes** page.
Participants receive an automatic score; 70% is the passing threshold.

Public registration always creates a Participant profile. Only a trusted
operator should set `role` to `admin`. Firestore rules prevent users from
changing their own role. Firebase ID tokens are used to verify identity; the
app and server check the role in the matching Firestore profile.

## Why the Firebase Admin credential is needed

The server uses the Firebase Admin SDK credential to verify signed-in users
and perform trusted server-side Firestore operations, such as saving quiz
results and progress. This server credential is separate from the website's
Admin role. Creating a service-account key does not create an Admin user or
grant website access; `users/{uid}.role` controls that access.

If you need a service-account key, open **Firebase Console → Project settings
→ Service accounts → Firebase Admin SDK → Generate new private key**. Store
the JSON securely and configure it only in your hosting provider's secret
store or a private local credential file. Never commit it, put it in a
`NUXT_PUBLIC_*` variable, or share its contents.

If a key was exposed, revoke it in Google Cloud IAM, create a replacement,
update the secret, and redeploy. Deleting an exposed file from the latest
commit does not invalidate the key.
