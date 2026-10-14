# Firebase setup

1. Create a Firebase project and enable **Email/Password** under Authentication.
2. Add the deployment host to Firebase Authentication's authorized domains. Configure the password-reset email action URL to open `/auth/reset-password` on that host.
3. Copy `.env.example` to `.env` and fill in the Firebase Web App values. The web config is public; it is not a substitute for security rules.
4. Deploy the Firestore rules and index:

   ```sh
   firebase deploy --only firestore:rules,firestore:indexes
   ```

5. Public registration creates Participants. To create an Admin, a trusted operator creates the account in Firebase Authentication, then creates `users/{uid}` in Firestore using the exact Authentication UID as its document ID. Add profile fields `uid`, `displayName`, `email`, `organisation`, and `preferredLanguage`, and set the string field `role` to `admin`. The Admin must sign out and sign in again after the profile is created. The application uses only `admin` and `participant` roles.

The application stores participant profiles in `users/{uid}`, course progress in `users/{uid}/courseProgress/{courseId}`, and quiz attempts in `quizAttempts/{attemptId}`. Clients can read a participant's own progress and attempts. Client writes to progress and quiz results are denied by `firestore.rules`; quiz submission, grading, and Admin API operations are temporarily disabled. This app no longer uses Firebase Admin SDK or a service-account file.

The original course and lesson materials are bundled with the application. Existing bilingual `courseMaterials` documents are readable by signed-in users; writes are denied. Quiz attempts retain prior submissions, but Admin review and marking are unavailable. A trusted backend is required before re-enabling these privileged operations.
