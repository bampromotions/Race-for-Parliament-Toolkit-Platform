import { doc, getDoc } from 'firebase/firestore'

export interface CourseProgress {
  passedModules: number[]
  scores: Record<string, number>
  attemptsByModule: Record<string, number>
  latestAttemptId: string | null
}

export interface QuizAttemptResult {
  id?: string
  attemptId?: string
  moduleId: number
  score: number
  passed: boolean
  attempts: number
  reviewStatus?: 'pending' | 'reviewed'
  reviewerFeedback?: string
}

const emptyProgress: CourseProgress = {
  passedModules: [],
  scores: {},
  attemptsByModule: {},
  latestAttemptId: null,
}

export function createCourseProgressRepository(firebase: ReturnType<typeof useFirebase>) {
  return {
    async getProgress(): Promise<CourseProgress> {
      const { auth, db } = firebase.requireFirebase()
      const user = auth.currentUser
      if (!user) throw new Error('You must be signed in to read course progress.')

      const snapshot = await getDoc(doc(db, 'users', user.uid, 'courseProgress', 'race-for-parliament'))
      if (!snapshot.exists()) return { ...emptyProgress }

      const data = snapshot.data()
      return {
        passedModules: Array.isArray(data.passedModules)
          ? data.passedModules.filter((value): value is number => Number.isInteger(value))
          : [],
        scores: data.scores && typeof data.scores === 'object' ? data.scores as Record<string, number> : {},
        attemptsByModule: data.attemptsByModule && typeof data.attemptsByModule === 'object'
          ? data.attemptsByModule as Record<string, number>
          : {},
        latestAttemptId: typeof data.latestAttemptId === 'string' ? data.latestAttemptId : null,
      }
    },
    async getAttempt(id: string): Promise<QuizAttemptResult> {
      if (!/^[A-Za-z0-9_-]{1,128}$/.test(id)) throw new Error('The quiz attempt ID is invalid.')

      const { auth, db } = firebase.requireFirebase()
      if (!auth.currentUser) throw new Error('You must be signed in to read quiz results.')

      const snapshot = await getDoc(doc(db, 'quizAttempts', id))
      if (!snapshot.exists()) throw new Error('Quiz result not found.')

      const data = snapshot.data()
      if (!Number.isInteger(data.moduleId)
        || typeof data.score !== 'number'
        || typeof data.passed !== 'boolean') {
        throw new Error('The quiz result has invalid data.')
      }

      return {
        id: snapshot.id,
        attemptId: snapshot.id,
        moduleId: data.moduleId,
        score: data.score,
        passed: data.passed,
        attempts: Number.isInteger(data.attemptNumber) ? data.attemptNumber : 1,
        reviewStatus: data.reviewStatus === 'reviewed' ? 'reviewed' : 'pending',
        reviewerFeedback: typeof data.reviewerFeedback === 'string' ? data.reviewerFeedback : undefined,
      }
    },
  }
}
