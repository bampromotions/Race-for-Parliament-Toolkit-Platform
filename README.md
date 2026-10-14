# Race for Parliament Toolkit Platform

A bilingual (English and Sesotho) learning website for the Race for Parliament Toolkit. Participants create profiles, work through course modules in order, complete quizzes, and save their learning progress. Admins manage course materials, questions, participant results, and quiz marking.

## User flow

```text
Trusted operator creates the Admin in Firebase Authentication
and sets users/{uid}.role to "admin" in Firestore
        |
        v
Admin signs in and manages content, questions, results,
and quiz marking
        |
        v
Participant registers and signs in
        |
        v
Participant reads Module 1 and submits its quiz
        |
        v
Progress is saved; passing unlocks the next module
        |
Participant continues through the ordered modules;
Admin monitors progress and quiz results
```

## Create the first Admin

There is no public Admin sign-up. Public registration always creates a Participant. A trusted operator creates the Admin account in Firebase Authentication and adds its profile to Firestore.

For the complete website access, credential, and role-management walkthrough, see [ADMIN_ACCESS_GUIDE.md](./ADMIN_ACCESS_GUIDE.md).

1. Finish the Firebase setup below.
2. In Firebase Console, create the Admin account under **Authentication → Users**. Copy its **User UID**.
3. In **Firestore Database → Data**, create a document in the `users` collection whose document ID is exactly that UID.
4. Add these profile fields to the document:
   - `uid` (string): the Firebase Authentication UID
   - `displayName` (string): the Admin's name
   - `email` (string): the same email as the Authentication account
   - `organisation` (string): an organisation name, or an empty string
   - `preferredLanguage` (string): `en` or `st`
   - `role` (string): `admin`
5. Have the Admin sign out and sign back in. The app reads the role from `users/{uid}.role` and opens `/admin`.

The Admin profile must be in the existing `users` collection, not a separate `admins` collection. Only trusted operators should assign `role: "admin"`; users cannot change their own role through the app.

## Roles and what each person does

| Role | How the account is created | Website workflow |
| --- | --- | --- |
| **Admin** | A trusted operator creates the Firebase Authentication account and its `users/{uid}` Firestore profile with `role: "admin"`. | Add bilingual lesson material and questions; monitor participants, progress, and results; review and mark quizzes. |
| **Participant** | Register on the website; every public sign-up starts with this role. | Create a profile, choose English or Sesotho, study modules in sequence, take quizzes, and resume saved progress. |

The app uses only the `admin` and `participant` roles. The signed-in Firebase UID is verified, then the app and server read the role from `users/{uid}`. Firestore rules prevent a user from editing their own role; staff API requests independently check the profile on the server.

## Participant learning flow

1. The participant creates an account through the registration page and chooses a preferred language.
2. Their profile and learning progress are associated with that account.
3. Module 1 is available first. Later modules stay locked until the preceding module quiz is passed.
4. The participant reads the material and submits the module quiz. The server calculates and saves the score, answers, and progress.
5. A passing score (70% or more) unlocks the next module. The participant can return later and continue from their saved progress.
6. An Admin can review the submission, confirm or adjust its score, and add feedback, and can monitor overall participation, individual progress, and results.

The course interface, lessons added by Admins, and questions added by staff support English and Sesotho.

## Run locally

Requirements: Node.js with support for `--env-file`, pnpm, and a Firebase project.

```sh
pnpm install
Copy-Item .env.example .env
pnpm dev
```

Fill in the Firebase Web App values in `.env`. The server also needs Firebase Admin credentials, either Application Default Credentials or `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON`. Keep service-account credentials private and out of source control.

## Firebase setup

1. Create a Firebase project and enable **Email/Password** under Authentication.
2. Add the local/deployment host to Firebase Authentication's authorized domains. Configure the password-reset action URL for `/auth/reset-password`.
3. Copy `.env.example` to `.env` and set the Firebase Web App configuration.
4. Configure Firebase Admin credentials for the server using Application Default Credentials or the secret `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON`.
5. Deploy Firestore security rules and indexes:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

6. Create the first Admin by following [Create the first Admin](#create-the-first-admin).

For additional Firebase configuration detail, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

## Data and permissions

- Participant profiles: `users/{uid}`
- Participant course progress: `users/{uid}/courseProgress/{courseId}`
- Quiz attempts and marking status: `quizAttempts/{attemptId}`
- Staff-authored quiz questions: `quizQuestions/{questionId}`
- Admin-authored lesson material: `courseMaterials/{materialId}`

Client writes to course progress and quiz attempts are denied by Firestore rules. Authenticated server APIs validate quiz submissions, save progress, and apply Admin marking decisions.
