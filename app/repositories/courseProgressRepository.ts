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

export function createCourseProgressRepository(request: ReturnType<typeof useFirebaseApi>['request']) {
  return {
    getProgress: () => request<CourseProgress>('/api/progress'),
    submitQuiz: (moduleId: number, answers: Record<string, string[]>) =>
      request<QuizAttemptResult>('/api/quiz/submit', { method: 'POST', body: { moduleId, answers } }),
    getAttempt: (id: string) => request<QuizAttemptResult>(`/api/quiz/attempt/${encodeURIComponent(id)}`),
  }
}
