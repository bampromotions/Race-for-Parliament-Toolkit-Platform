# Race for Parliament Toolkit Platform

A bilingual (English and Sesotho) learning website for the Race for Parliament Toolkit. Participants create profiles, work through course modules in order, complete quizzes, and save their learning progress. Staff roles support course administration, question authoring, and quiz marking.

## User flow

```text
Admin registers an account
        |
        v
Operator assigns the Admin role in Firebase
        |
        v
Admin signs in and adds bilingual lesson material
        |
        v
Content editor adds bilingual questions
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
        v
Marker reviews the submission and confirms or adjusts the score
        |
        v
Participant continues through the ordered modules;
staff monitor progress and quiz results
```

## Create the first Admin

There is no public Admin sign-up. New accounts always register as Participants; a trusted operator promotes the first staff account from a secured environment.

For the complete website access, credential, and role-management walkthrough, see [ADMIN_ACCESS_GUIDE.md](./ADMIN_ACCESS_GUIDE.md).

1. Finish the Firebase setup below and start the website.
2. Open the registration page and create an account for the person who will be the first Admin.
3. In Firebase Console, open **Authentication → Users** and copy that account's Firebase **User UID**.
4. From the project root, with `.env` configured with the Firebase project ID and server credentials, run:

   ```sh
   node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> admin
   ```

   Replace `<firebase-user-id>` with the copied UID (without angle brackets). The script assigns the Firebase Admin custom claim and updates the account profile role. It requires the account to have registered first.

5. Have the new Admin sign out and sign in again to refresh their ID token. They will then be directed to the Admin area.

Use the same command to promote an existing registered account to another staff role:

```sh
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> contentEditor
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> marker
```

Return an account to the Participant role with:

```sh
node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> participant
```

Do not expose service-account credentials or run role assignment from the public website. Only trusted operators should assign staff roles.

## Roles and what each person does

| Role | How the account is created | Website workflow |
| --- | --- | --- |
| **Admin** | Self-register, then an operator assigns the `admin` role using the command above. | Add bilingual lesson material to course modules; monitor participants, progress, and results; add questions and mark quizzes. |
| **Content editor** | Self-register, then an operator assigns `contentEditor`. | Add bilingual single-choice, multiple-choice, and true/false quiz questions to modules. |
| **Marker** | Self-register, then an operator assigns `marker`. | Review participant answers, confirm or adjust the score, and optionally leave feedback. |
| **Participant** | Register on the website; every public sign-up starts with this role. | Create a profile, choose English or Sesotho, study modules in sequence, take quizzes, and resume saved progress. |

Staff roles are assigned using Firebase custom claims. Page visibility is not the only protection: staff API requests also verify role claims on the server. A user-editable profile field does not grant staff access.

## Participant learning flow

1. The participant creates an account through the registration page and chooses a preferred language.
2. Their profile and learning progress are associated with that account.
3. Module 1 is available first. Later modules stay locked until the preceding module quiz is passed.
4. The participant reads the material and submits the module quiz. The server calculates and saves the score, answers, and progress.
5. A passing score (70% or more) unlocks the next module. The participant can return later and continue from their saved progress.
6. A Marker can review the submission, confirm or adjust its score, and add feedback. Admins can monitor overall participation, individual progress, and results.

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

Client writes to course progress and quiz attempts are denied by Firestore rules. Authenticated server APIs validate quiz submissions, save progress, and apply Marker decisions.
