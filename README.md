# Race for Parliament Toolkit Platform

A bilingual (English and Sesotho) learning website for the Race for Parliament Toolkit. Participants create profiles, work through course modules in order, complete quizzes, and save their learning progress. Admins manage course materials, quiz questions, participants, results, and marking.

## User flow

```text
Trusted operator creates an Admin account in Firebase Authentication
and a matching users/{uid} Firestore profile with role "admin"
        |
        v
Admin signs in and manages materials, questions, results, and marking
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

There is no public Admin sign-up. Public registration creates Participants. A trusted operator creates each Admin account manually in Firebase Authentication and Firestore.

For the complete website access, credential, and role-management walkthrough, see [ADMIN_ACCESS_GUIDE.md](./ADMIN_ACCESS_GUIDE.md).

1. In Firebase Console, create the Admin account under **Authentication → Users** and copy its **User UID**.
2. Open **Firestore Database → Data** and create a document in the existing `users` collection using that exact UID as the document ID. Do not create a separate Admin collection.
3. Add fields `uid`, `displayName`, `email`, `organisation`, and `preferredLanguage`, then set the string field `role` to `admin`.
4. Have the Admin sign out and sign in. The app reads the role from `users/{uid}.role` and directs them to `/admin`.

Only trusted operators should set the Admin role. The app prevents users from changing their own role.

## Roles and what each person does

| Role | How the account is created | Website workflow |
| --- | --- | --- |
| **Admin** | A trusted operator creates the account in Firebase Authentication and its `users/{uid}` profile with `role: "admin"`. | Create and publish standalone quizzes; add bilingual course questions and lesson material; monitor participants, progress, and results; review and mark quizzes. |
| **Participant** | Register on the website; every public sign-up starts with this role. | Create a profile, choose English or Sesotho, study modules in sequence, take quizzes, and resume saved progress. |

The application uses only `admin` and `participant`. Firebase ID tokens verify identity; the app and server read authorization from the matching Firestore `users/{uid}` profile. Firestore rules prevent users from changing their own role. Published standalone quizzes appear on the Participant Quizzes page and are automatically scored on submission.

## Participant learning flow

1. The participant creates an account through the registration page and chooses a preferred language.
2. Their profile and learning progress are associated with that account.
3. Module 1 is available first. Later modules stay locked until the preceding module quiz is passed.
4. The participant reads the material and submits the module quiz. The server calculates and saves the score, answers, and progress.
5. A passing score (70% or more) unlocks the next module. The participant can return later and continue from their saved progress.
6. An Admin can review the submission, confirm or adjust its score, add feedback, and monitor overall participation, individual progress, and results.

The course interface, lessons, and questions support English and Sesotho.

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
