export interface StandaloneQuizOption {
  value: string
  labelEn: string
  labelSt: string
}

export interface StandaloneQuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'truefalse'
  promptEn: string
  promptSt: string
  options: StandaloneQuizOption[]
}

export interface StandaloneQuizSummary {
  id: string
  titleEn: string
  titleSt: string
  questionCount: number
}

export interface StandaloneQuiz extends StandaloneQuizSummary {
  questions: StandaloneQuizQuestion[]
}
