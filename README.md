# Race for Parliament Toolkit Platform

A bilingual (English and Sesotho) learning website for the Race for Parliament Toolkit. Firebase Authentication and client-side profile management remain enabled. Server-backed quizzes, progress updates, and Admin features are temporarily disabled while the backend is replaced.

## User flow

```text
Trusted operator creates an Admin account in Firebase Authentication
and a matching users/{uid} Firestore profile with role "admin"
        |
        v
Admin signs in (Admin server features temporarily unavailable)
        |
        v
Participant registers and signs in
        |
        v
Participant reads course material
        |
        v
Quiz submission and saved progress updates are temporarily unavailable
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
| **Admin** | A trusted operator creates the account in Firebase Authentication and its `users/{uid}` profile with `role: "admin"`. | Sign in. Admin management, reports, and marking are temporarily unavailable. |
| **Participant** | Register on the website; every public sign-up starts with this role. | Create a profile, choose English or Sesotho, and read the bundled course materials. Quiz submissions and progress updates are temporarily unavailable. |

The application uses only `admin` and `participant`. The client reads the matching Firestore `users/{uid}` profile, and Firestore rules prevent users from changing their own role. Server-backed Admin and quiz features are disabled until a trusted backend is available.

## Participant learning flow

1. The participant creates an account through the registration page and chooses a preferred language.
2. Their profile is associated with that account.
3. Participants can read bundled course material and their own previously saved progress/results.
4. Quiz submissions, new progress updates, standalone quizzes, and Admin management are temporarily disabled.

The course interface, lessons, and questions support English and Sesotho.

## Run locally

Requirements: Node.js with support for `--env-file`, pnpm, and a Firebase project.

```sh
pnpm install
Copy-Item .env.example .env
pnpm dev
```

Fill in the Firebase Web App values in `.env`. No Firebase Admin SDK or service-account JSON is used by this deployment.

## Firebase setup

1. Create a Firebase project and enable **Email/Password** under Authentication.
2. Add the local/deployment host to Firebase Authentication's authorized domains. Configure the password-reset action URL for `/auth/reset-password`.
3. Copy `.env.example` to `.env` and set the Firebase Web App configuration.
4. Deploy Firestore security rules and indexes:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

5. Create the first Admin profile by following [Create the first Admin](#create-the-first-admin). Admin-only server features remain disabled.

For additional Firebase configuration detail, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

## Data and permissions

- Participant profiles: `users/{uid}`
- Participant course progress: `users/{uid}/courseProgress/{courseId}`
- Quiz attempts and marking status: `quizAttempts/{attemptId}`
- Staff-authored quiz questions: `quizQuestions/{questionId}`
- Admin-authored lesson material: `courseMaterials/{materialId}`

Client reads of a user's own course progress and quiz attempts are permitted by Firestore rules. Writes to progress, quiz attempts, quiz questions, and Admin-managed data remain denied. Server API routes return 503 until a trusted backend is implemented; no service-account credential is required or used.
