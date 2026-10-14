# Firebase setup

1. Create a Firebase project and enable **Email/Password** under Authentication.
2. Add the deployment host to Firebase Authentication's authorized domains. Configure the password-reset email action URL to open `/auth/reset-password` on that host.
3. Copy `.env.example` to `.env` and fill in the Firebase Web App values. The web config is public; it is not a substitute for security rules.
4. Configure server credentials using Application Default Credentials or set `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` to service-account JSON in the deployment secret store. For local development, the server also reads the ignored root file `raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json` when present. Never commit the service-account key or put it in a `NUXT_PUBLIC_*` variable.
5. Deploy the Firestore rules and index:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

6. Public registration creates Participants. To create an Admin, a trusted operator creates the account in Firebase Authentication, then creates `users/{uid}` in Firestore using the exact Authentication UID as its document ID. Add profile fields `uid`, `displayName`, `email`, `organisation`, and `preferredLanguage`, and set the string field `role` to `admin`. The Admin must sign out and sign in again after the profile is created. The application uses only `admin` and `participant` roles.

The application stores participant profiles in `users/{uid}`, server-validated course progress in `users/{uid}/courseProgress/{courseId}`, and server-managed quiz attempts in `quizAttempts/{attemptId}`. Client writes to progress and quiz results are denied by `firestore.rules`; quiz grading and progression updates run through the authenticated Nuxt server API.

The original course and lesson materials are bundled with the application. Admins can add bilingual lesson material to existing modules; it is stored in the server-only `courseMaterials` collection. New bilingual quiz questions are stored in `courseQuestions` and can be added by Admins. Quiz attempts retain submitted answers for Admin review; Admins can confirm or override the automatic score. Admin permissions are checked by pages, Firestore rules, and server APIs using the protected `users/{uid}.role` field.
