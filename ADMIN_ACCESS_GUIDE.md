# Website access and Admin setup

The application has exactly two roles: `participant` and `admin`. Participants
register on the website. A trusted operator creates Admin accounts manually in
Firebase Authentication and Firestore.

## Access the website

1. Open the deployed website, or use `http://localhost:3000` during local
   development.
2. Register at `/auth/register` to create a Participant account, or sign in at
   `/auth/login`.
3. Participants can read course material and their permitted saved data.
   Quiz submission and saved progress updates are temporarily unavailable.
   Admins can sign in, but Admin management, results, and marking are
   temporarily unavailable while the server backend is replaced.

## Configure Firebase

1. Enable **Authentication → Sign-in method → Email/Password** in Firebase
   Console.
2. Add the deployed website domain under **Authentication → Settings →
   Authorized domains**.
3. Configure the Firebase Web App settings using `.env.example`. The
   `NUXT_PUBLIC_FIREBASE_*` values identify the web app; they do not grant
   Admin access.
4. Deploy Firestore rules and indexes:

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
| `participant` | Read course materials and personal saved data. Quiz submission and progress updates are temporarily unavailable. |
| `admin` | Sign in; Admin management, reports, and marking are temporarily unavailable. |

Public registration always creates a Participant profile. Only a trusted
operator should set `role` to `admin`. Firestore rules prevent users from
changing their own role. The browser Firebase client checks the role in the
matching Firestore profile. No Firebase Admin SDK or service-account JSON is
used.

Server routes for privileged operations return 503 until a trusted backend
is implemented. This is intentional: moving score calculation and Admin
operations to browser code would let users tamper with scores and bypass
trusted checks.
