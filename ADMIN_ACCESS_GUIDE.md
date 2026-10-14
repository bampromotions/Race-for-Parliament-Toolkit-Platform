# Website access and Admin setup

The application has exactly two roles: **participant** and **admin**. A
participant registers through the website. An Admin is created manually in
Firebase Authentication and Firestore by a trusted operator.

## Access the website

1. Open the deployed website, or use `http://localhost:3000` during local
   development.
2. Register at `/auth/register` to create a Participant account, or sign in at
   `/auth/login` with an existing account.
3. Participants can study the course, take quizzes, and view their progress.
   Admins use the same login page and have access to the Admin area, including
   lesson materials, questions, participants, results, and marking.

## Set up Firebase

1. Enable **Authentication → Sign-in method → Email/Password** in Firebase
   Console.
2. Add the deployed website domain under **Authentication → Settings →
   Authorized domains**.
3. Configure the Firebase Web App settings using `.env.example`. These
   `NUXT_PUBLIC_FIREBASE_*` settings identify the web app; they are not Admin
   credentials.
4. Configure the Firebase Admin credential for the server. In deployment, use
   a protected secret named `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` or the hosting
   provider's Application Default Credentials. For local development, prefer
   Application Default Credentials; the server also reads the ignored root
   file `raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json` when
   present.
5. Deploy Firestore rules and indexes:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

## Create an Admin account manually

There is no public Admin registration. Creating an account in Firebase
Authentication alone does not make it an Admin. The Admin role is read from
the Firestore user profile at `users/{uid}`.

1. In Firebase Console, open **Authentication → Users** and add the Admin's
   account. Copy the resulting **User UID**.
2. Open **Firestore Database → Data**. In the existing `users` collection,
   create a document whose document ID is exactly the copied User UID. Do not
   use a separate `admins` collection.
3. Add these fields to the document:

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

To verify setup if the account still opens the Participant dashboard, check
that the document is in `users`, that its document ID exactly matches the
Authentication UID, and that `role` is a string set to lowercase `admin`.
Confirm the website is configured for the same Firebase project, then sign
out and back in.

## Roles and permissions

| Role | Access |
| --- | --- |
| `participant` | Study course materials, take quizzes, and view personal progress. |
| `admin` | Add lesson materials and questions; monitor participants, progress, and results; review and mark quizzes. |

Public registration always writes a `participant` profile. Only trusted
operators should create or change an Admin profile. Firestore rules prevent
users from editing their own role. The app and each protected server API check
the Firestore profile role; a Firebase Authentication account by itself does
not grant Admin permissions.

## Why the Firebase Admin credential is needed

The server uses the Firebase Admin SDK credential to verify signed-in users
and perform trusted server-side Firestore operations, such as saving quiz
results and progress. It is separate from the `admin` application role:
creating a service-account key does not create an Admin account or grant
website access. Admin website access comes from `users/{uid}.role`.

If you need to create a service-account key, open **Firebase Console → Project
settings → Service accounts → Firebase Admin SDK → Generate new private key**.
Store the JSON securely and enter it only into your hosting provider's secret
store or a private local credential file. Never commit it, place it in a
`NUXT_PUBLIC_*` variable, or share its contents.

If a key was exposed, revoke it in Google Cloud IAM, create a replacement,
update the secret, and redeploy. Deleting an exposed file from the latest
commit does not invalidate the key.
