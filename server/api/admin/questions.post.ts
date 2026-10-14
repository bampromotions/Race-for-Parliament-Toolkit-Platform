import { FieldValue } from 'firebase-admin/firestore'
import { courseModules } from '../../../app/data/course'
import { getFirebaseAdmin, requireRole } from '../../utils/firebase-admin'

type QuestionType = 'single' | 'multiple' | 'truefalse'
type QuestionOption = { value: string; labelEn: string; labelSt: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function invalidQuestion(): never {
  throw createError({ statusCode: 400, statusMessage: 'The quiz question is invalid.' })
}

export default defineEventHandler(async (event) => {
  const user = await requireRole(event, ['admin', 'contentEditor'])
  const body = await readBody<unknown>(event)
  if (!isRecord(body)) invalidQuestion()

  const { moduleId, type, promptEn, promptSt, options, correctAnswers } = body
  if (typeof moduleId !== 'number'
    || !Number.isInteger(moduleId)
    || !courseModules.some((module) => module.id === moduleId)
    || !['single', 'multiple', 'truefalse'].includes(String(type))
    || typeof promptEn !== 'string'
    || promptEn.trim().length === 0
    || promptEn.length > 500
    || typeof promptSt !== 'string'
    || promptSt.trim().length === 0
    || promptSt.length > 500
    || !Array.isArray(options)
    || options.length < 2
    || options.length > 10
    || !Array.isArray(correctAnswers)
    || correctAnswers.length === 0) {
    invalidQuestion()
  }

  const validatedOptions: QuestionOption[] = []
  const optionValues = new Set<string>()
  for (const option of options) {
    if (!isRecord(option)
      || typeof option.value !== 'string'
      || !/^[A-Za-z0-9_-]{1,60}$/.test(option.value)
      || typeof option.labelEn !== 'string'
      || option.labelEn.trim().length === 0
      || option.labelEn.length > 200
      || typeof option.labelSt !== 'string'
      || option.labelSt.trim().length === 0
      || option.labelSt.length > 200
      || optionValues.has(option.value)) {
      invalidQuestion()
    }
    optionValues.add(option.value)
    validatedOptions.push({
      value: option.value,
      labelEn: option.labelEn.trim(),
      labelSt: option.labelSt.trim(),
    })
  }

  const validType = type as QuestionType
  const validAnswers = correctAnswers.filter((answer): answer is string => typeof answer === 'string')
  if (validAnswers.length !== correctAnswers.length
    || validAnswers.length > validatedOptions.length
    || new Set(validAnswers).size !== validAnswers.length
    || validAnswers.some((answer) => !optionValues.has(answer))
    || (validType !== 'multiple' && validAnswers.length !== 1)
    || (validType === 'truefalse'
      && (validatedOptions.length !== 2 || !optionValues.has('true') || !optionValues.has('false')))) {
    invalidQuestion()
  }

  const { db } = getFirebaseAdmin(event)
  const questionRef = db.collection('quizQuestions').doc()
  await questionRef.create({
    courseId: 'race-for-parliament',
    moduleId,
    type: validType,
    promptEn: promptEn.trim(),
    promptSt: promptSt.trim(),
    options: validatedOptions,
    correctAnswers: validAnswers,
    createdBy: user.uid,
    createdAt: FieldValue.serverTimestamp(),
  })

  return { id: questionRef.id }
})
