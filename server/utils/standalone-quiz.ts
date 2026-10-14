import type { StandaloneQuizOption } from '../../app/types/standalone-quiz'

type QuestionType = 'single' | 'multiple' | 'truefalse'

export interface StandaloneQuizQuestionInput {
  id: string
  type: QuestionType
  promptEn: string
  promptSt: string
  options: StandaloneQuizOption[]
  correctAnswers: string[]
}

export interface StandaloneQuizInput {
  titleEn: string
  titleSt: string
  questions: StandaloneQuizQuestionInput[]
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function invalidQuiz(): never {
  throw createError({ statusCode: 400, statusMessage: 'The quiz details or questions are invalid.' })
}

function requiredText(value: unknown, maxLength: number): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLength
}

export function validateStandaloneQuiz(value: unknown): StandaloneQuizInput {
  if (!isRecord(value)
    || !requiredText(value.titleEn, 120)
    || !requiredText(value.titleSt, 120)
    || !Array.isArray(value.questions)
    || value.questions.length < 1
    || value.questions.length > 50) {
    invalidQuiz()
  }

  const questions: StandaloneQuizQuestionInput[] = value.questions.map((item, index) => {
    if (!isRecord(item)
      || !['single', 'multiple', 'truefalse'].includes(String(item.type))
      || !requiredText(item.promptEn, 500)
      || !requiredText(item.promptSt, 500)
      || !Array.isArray(item.options)
      || item.options.length < 2
      || item.options.length > 10
      || !Array.isArray(item.correctAnswers)
      || item.correctAnswers.length === 0) {
      invalidQuiz()
    }

    const options: StandaloneQuizOption[] = []
    const values = new Set<string>()
    for (const option of item.options) {
      if (!isRecord(option)
        || typeof option.value !== 'string'
        || !/^[A-Za-z0-9_-]{1,60}$/.test(option.value)
        || !requiredText(option.labelEn, 200)
        || !requiredText(option.labelSt, 200)
        || values.has(option.value)) {
        invalidQuiz()
      }
      values.add(option.value)
      options.push({
        value: option.value,
        labelEn: option.labelEn.trim(),
        labelSt: option.labelSt.trim(),
      })
    }

    const correctAnswers = item.correctAnswers.filter((answer): answer is string => typeof answer === 'string')
    const type = item.type as QuestionType
    if (correctAnswers.length !== item.correctAnswers.length
      || correctAnswers.length > options.length
      || new Set(correctAnswers).size !== correctAnswers.length
      || correctAnswers.some((answer) => !values.has(answer))
      || (type !== 'multiple' && correctAnswers.length !== 1)
      || (type === 'truefalse'
        && (options.length !== 2 || !values.has('true') || !values.has('false')))) {
      invalidQuiz()
    }

    return {
      id: `q${index + 1}`,
      type,
      promptEn: item.promptEn.trim(),
      promptSt: item.promptSt.trim(),
      options,
      correctAnswers,
    }
  })

  return {
    titleEn: value.titleEn.trim(),
    titleSt: value.titleSt.trim(),
    questions,
  }
}
