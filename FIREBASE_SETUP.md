# Firebase setup

1. Create a Firebase project and enable **Email/Password** under Authentication.
2. Add the deployment host to Firebase Authentication's authorized domains. Configure the password-reset email action URL to open `/auth/reset-password` on that host.
3. Copy `.env.example` to `.env` and fill in the Firebase Web App values. The web config is public; it is not a substitute for security rules.
4. Configure server credentials using Application Default Credentials or set `NUXT_FIREBASE_SERVICE_ACCOUNT_JSON` to service-account JSON in the deployment secret store. For local development, the server also reads the ignored root file `raceforpalament-39d8d-firebase-adminsdk-fbsvc-bcfdae06a5.json` when present. Never commit the service-account key or put it in a `NUXT_PUBLIC_*` variable.
5. Deploy the Firestore rules and index:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

6. Create a participant using the registration page. Grant administrator access only to trusted CSO staff from a secured operator environment:

   ```sh
   node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> grant
   ```

   To revoke it, use `node --env-file=.env scripts/set-admin-claim.mjs <firebase-user-id> revoke`. The user must refresh their Firebase ID token after the claim changes. The server checks this custom claim for every admin API request; a user profile field cannot grant admin access.

The application stores participant profiles in `users/{uid}`, server-validated course progress in `users/{uid}/courseProgress/{courseId}`, and immutable quiz attempts in `quizAttempts/{attemptId}`. Client writes to progress and quiz results are denied by `firestore.rules`; quiz grading and progression updates run through the authenticated Nuxt server API.

Course materials and quiz questions are currently bundled with the application. Admin participant, progress, and results views are backed by Firestore; course/module/quiz management screens are currently read-only.
