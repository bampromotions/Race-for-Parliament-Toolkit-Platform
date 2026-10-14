<script setup lang="ts">
import type { StandaloneQuizQuestion } from '../../../types/standalone-quiz'

definePageMeta({ layout: 'admin', middleware: 'admin' })

type DraftQuestion = Omit<StandaloneQuizQuestion, 'id'> & { correctAnswers: string[] }
type DraftOption = { value: string; labelEn: string; labelSt: string }

const { t } = useI18n()
const localePath = useLocalePath()
const api = useFirebaseApi()
const titleEn = ref('')
const titleSt = ref('')
const questionType = ref<'single' | 'multiple' | 'truefalse'>('single')
const promptEn = ref('')
const promptSt = ref('')
const selectedCorrectAnswer = ref('')
const selectedCorrectAnswers = ref<string[]>([])
const options = ref<DraftOption[]>([
  { value: 'a', labelEn: '', labelSt: '' },
  { value: 'b', labelEn: '', labelSt: '' },
])
const questions = ref<DraftQuestion[]>([])
const pending = ref(false)
const errorMessage = ref('')

watch(questionType, (type) => {
  selectedCorrectAnswer.value = ''
  selectedCorrectAnswers.value = []
  options.value = type === 'truefalse'
    ? [
        { value: 'true', labelEn: 'True', labelSt: 'Nnete' },
        { value: 'false', labelEn: 'False', labelSt: 'Nnete ha e joalo' },
      ]
    : [
        { value: 'a', labelEn: '', labelSt: '' },
        { value: 'b', labelEn: '', labelSt: '' },
      ]
})

function addOption() {
  if (options.value.length < 10) {
    const index = options.value.length
    options.value.push({ value: `option-${index + 1}`, labelEn: '', labelSt: '' })
  }
}

function removeOption(index: number) {
  if (options.value.length > 2) options.value.splice(index, 1)
}

function addQuestion() {
  errorMessage.value = ''
  const correctAnswers = questionType.value === 'multiple'
    ? selectedCorrectAnswers.value
    : [selectedCorrectAnswer.value]
  if (!promptEn.value.trim()
    || !promptSt.value.trim()
    || options.value.some((option) => !option.value.trim() || !option.labelEn.trim() || !option.labelSt.trim())
    || new Set(options.value.map((option) => option.value)).size !== options.value.length
    || correctAnswers.some((answer) => !answer)
    || (questionType.value === 'multiple' && correctAnswers.length === 0)) {
    errorMessage.value = t('admin.allQuestionsRequired')
    return
  }

  questions.value.push({
    type: questionType.value,
    promptEn: promptEn.value.trim(),
    promptSt: promptSt.value.trim(),
    options: options.value.map((option) => ({ ...option })),
    correctAnswers: [...correctAnswers],
  })
  promptEn.value = ''
  promptSt.value = ''
  selectedCorrectAnswer.value = ''
  selectedCorrectAnswers.value = []
  questionType.value = 'single'
}

async function createQuiz() {
  errorMessage.value = ''
  if (questions.value.length === 0) {
    errorMessage.value = t('admin.allQuestionsRequired')
    return
  }

  pending.value = true
  try {
    await api.request('/api/admin/quizzes', {
      method: 'POST',
      body: {
        titleEn: titleEn.value,
        titleSt: titleSt.value,
        questions: questions.value,
      },
    })
    await navigateTo({ path: localePath('/admin/quizzes'), query: { created: '1' } })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section class="mx-auto max-w-4xl space-y-6">
    <NuxtLink :to="localePath('/admin/quizzes')" class="text-sm font-semibold text-emerald-800 hover:underline">
      ← {{ t('navigation.quizzes') }}
    </NuxtLink>
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.createStandaloneQuiz') }}</h1>
      <p class="mt-2 text-sm text-slate-600">{{ t('admin.questionEditorIntro') }}</p>
    </header>

    <form class="space-y-6" @submit.prevent="createQuiz">
      <section class="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.standaloneQuizTitleEnglish') }}
          <input v-model="titleEn" required maxlength="120" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.standaloneQuizTitleSesotho') }}
          <input v-model="titleSt" required maxlength="120" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
        </label>
      </section>

      <section class="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
        <h2 class="text-lg font-semibold text-slate-950">{{ t('admin.addQuestion') }}</h2>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.questionType') }}
          <select v-model="questionType" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
            <option value="single">{{ t('admin.singleChoice') }}</option>
            <option value="multiple">{{ t('admin.multipleChoice') }}</option>
            <option value="truefalse">{{ t('admin.trueFalse') }}</option>
          </select>
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.promptEnglish') }}
          <textarea v-model="promptEn" required maxlength="500" rows="2" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5" />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.promptSesotho') }}
          <textarea v-model="promptSt" required maxlength="500" rows="2" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5" />
        </label>
        <fieldset class="space-y-3">
          <legend class="text-sm font-semibold text-slate-800">{{ t('admin.answerOptions') }}</legend>
          <div v-for="(option, index) in options" :key="index" class="grid gap-2 rounded-lg border border-slate-200 p-3 sm:grid-cols-[1fr_1fr_1fr_auto_auto] sm:items-end">
            <label class="text-xs font-medium text-slate-600">
              {{ t('admin.optionValue') }}
              <input v-model="option.value" required maxlength="60" class="mt-1 block w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm">
            </label>
            <label class="text-xs font-medium text-slate-600">
              {{ t('admin.optionEnglish') }}
              <input v-model="option.labelEn" required maxlength="200" class="mt-1 block w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm">
            </label>
            <label class="text-xs font-medium text-slate-600">
              {{ t('admin.optionSesotho') }}
              <input v-model="option.labelSt" required maxlength="200" class="mt-1 block w-full rounded-md border border-slate-300 px-2.5 py-2 text-sm">
            </label>
            <label class="flex items-center gap-2 pb-2 text-xs font-medium text-slate-700">
              <input
                v-if="questionType === 'multiple'"
                v-model="selectedCorrectAnswers"
                type="checkbox"
                :value="option.value"
                class="size-4 accent-emerald-800"
              >
              <input
                v-else
                v-model="selectedCorrectAnswer"
                type="radio"
                :name="`correct-answer-${questionType}`"
                :value="option.value"
                class="size-4 accent-emerald-800"
              >
              {{ t('admin.correctAnswer') }}
            </label>
            <button type="button" :disabled="options.length <= 2 || questionType === 'truefalse'" class="pb-2 text-xs font-semibold text-red-700 disabled:opacity-40" @click="removeOption(index)">
              {{ t('common.remove') }}
            </button>
          </div>
          <button v-if="questionType !== 'truefalse'" type="button" :disabled="options.length >= 10" class="text-sm font-semibold text-emerald-800 hover:underline disabled:opacity-40" @click="addOption">
            {{ t('admin.addOption') }}
          </button>
        </fieldset>
        <button type="button" class="rounded-md border border-emerald-800 px-4 py-2.5 text-sm font-semibold text-emerald-800" @click="addQuestion">
          {{ t('admin.addQuestionToQuiz') }}
        </button>
      </section>

      <section class="space-y-3">
        <h2 class="text-lg font-semibold text-slate-950">{{ t('admin.addedQuestions') }} ({{ questions.length }})</h2>
        <p v-if="questions.length === 0" class="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">{{ t('admin.noAddedQuestions') }}</p>
        <ol v-else class="space-y-3">
          <li v-for="(question, index) in questions" :key="index" class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="text-xs font-semibold text-slate-500">{{ t('course.question', { current: index + 1, total: questions.length }) }}</p>
            <p class="mt-1 font-semibold text-slate-900">{{ question.promptEn }}</p>
            <p class="text-sm text-slate-600">{{ question.promptSt }}</p>
            <button type="button" class="mt-2 text-xs font-semibold text-red-700" @click="questions.splice(index, 1)">
              {{ t('common.remove') }}
            </button>
          </li>
        </ol>
      </section>

      <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
      <button type="submit" :disabled="pending || questions.length === 0" class="rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">
        {{ pending ? t('common.loading') : t('admin.createQuiz') }}
      </button>
    </form>
  </section>
</template>
