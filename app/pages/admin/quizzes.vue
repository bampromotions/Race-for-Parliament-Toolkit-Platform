<script setup lang="ts">
import { courseModules } from '../../data/course'
import type { CourseQuestion } from '../../data/course'

definePageMeta({ layout: 'admin', middleware: 'staff' })
const { t, locale } = useI18n()
const api = useFirebaseApi()
const selectedModule = ref(1)
const questionType = ref<'single' | 'multiple' | 'truefalse'>('single')
const promptEn = ref('')
const promptSt = ref('')
const selectedCorrectAnswer = ref('')
const selectedCorrectAnswers = ref<string[]>([])
const options = ref([
  { value: '', labelEn: '', labelSt: '' },
  { value: '', labelEn: '', labelSt: '' },
])
const questions = ref<Array<CourseQuestion & { moduleId: number }>>([])
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const visibleQuestions = computed(() => questions.value.map((question) => ({
  ...question,
  moduleTitle: locale.value === 'en'
    ? courseModules.find((module) => module.id === question.moduleId)?.titleEn ?? ''
    : courseModules.find((module) => module.id === question.moduleId)?.titleSt ?? '',
})))

watch(questionType, (type) => {
  selectedCorrectAnswer.value = ''
  selectedCorrectAnswers.value = []
  options.value = type === 'truefalse'
    ? [
        { value: 'true', labelEn: 'True', labelSt: 'Nnete' },
        { value: 'false', labelEn: 'False', labelSt: 'Nnete ha e joalo' },
      ]
    : [
        { value: '', labelEn: '', labelSt: '' },
        { value: '', labelEn: '', labelSt: '' },
      ]
})

async function loadQuestions() {
  loading.value = true
  errorMessage.value = ''
  try {
    const response = await api.request<{ questions: Array<CourseQuestion & { moduleId: number }> }>('/api/admin/questions')
    questions.value = response.questions
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
}

function addOption() {
  if (options.value.length < 10) options.value.push({ value: '', labelEn: '', labelSt: '' })
}

function removeOption(index: number) {
  if (options.value.length > 2) options.value.splice(index, 1)
}

async function addQuestion() {
  errorMessage.value = ''
  successMessage.value = ''
  pending.value = true
  try {
    const payload = {
      moduleId: selectedModule.value,
      type: questionType.value,
      promptEn: promptEn.value,
      promptSt: promptSt.value,
      options: options.value,
      correctAnswers: questionType.value === 'multiple'
        ? selectedCorrectAnswers.value
        : [selectedCorrectAnswer.value],
    }
    await api.request('/api/admin/questions', { method: 'POST', body: payload })
    promptEn.value = ''
    promptSt.value = ''
    questionType.value = 'single'
    options.value = [
      { value: '', labelEn: '', labelSt: '' },
      { value: '', labelEn: '', labelSt: '' },
    ]
    selectedCorrectAnswer.value = ''
    selectedCorrectAnswers.value = []
    successMessage.value = t('admin.questionAdded')
    await loadQuestions()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    pending.value = false
  }
}

onMounted(loadQuestions)
</script>

<template>
  <section class="space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('navigation.quizzes') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('admin.questionEditorIntro') }}</p>
    </header>
    <form class="space-y-5 rounded-xl border border-slate-200 bg-white p-5" @submit.prevent="addQuestion">
      <h2 class="text-lg font-semibold text-slate-950">{{ t('admin.addQuestion') }}</h2>
      <div class="grid gap-4 sm:grid-cols-2">
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.moduleLabel') }}
          <select v-model.number="selectedModule" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
            <option v-for="module in courseModules" :key="module.id" :value="module.id">{{ locale === 'en' ? module.titleEn : module.titleSt }}</option>
          </select>
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.questionType') }}
          <select v-model="questionType" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
            <option value="single">{{ t('admin.singleChoice') }}</option>
            <option value="multiple">{{ t('admin.multipleChoice') }}</option>
            <option value="truefalse">{{ t('admin.trueFalse') }}</option>
          </select>
        </label>
      </div>
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
              name="correct-answer"
              :value="option.value"
              class="size-4 accent-emerald-800"
            >
            {{ t('admin.correctAnswer') }}
          </label>
          <button type="button" :disabled="options.length <= 2" class="pb-2 text-xs font-semibold text-red-700 disabled:opacity-40" @click="removeOption(index)">{{ t('common.remove') }}</button>
        </div>
        <button v-if="questionType !== 'truefalse'" type="button" :disabled="options.length >= 10" class="text-sm font-semibold text-emerald-800 hover:underline disabled:opacity-40" @click="addOption">{{ t('admin.addOption') }}</button>
      </fieldset>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <p v-if="successMessage" role="status" class="text-sm text-emerald-800">{{ successMessage }}</p>
      <button type="submit" :disabled="pending" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{{ pending ? t('common.loading') : t('admin.addQuestion') }}</button>
    </form>
    <section class="space-y-3">
      <h2 class="text-lg font-semibold text-slate-950">{{ t('admin.addedQuestions') }}</h2>
      <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
      <p v-else-if="visibleQuestions.length === 0" class="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">{{ t('admin.noAddedQuestions') }}</p>
      <ol v-else class="space-y-3">
        <li v-for="question in visibleQuestions" :key="question.id" class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ question.moduleTitle }} · {{ t('admin.moduleLabel') }} {{ question.moduleId }}</p>
          <h3 class="mt-2 font-semibold text-slate-950">{{ locale === 'en' ? question.promptEn : question.promptSt }}</h3>
          <ul class="mt-3 grid gap-2 sm:grid-cols-2">
            <li v-for="option in question.options" :key="option.value" class="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">{{ locale === 'en' ? option.labelEn : option.labelSt }}</li>
          </ul>
        </li>
      </ol>
    </section>
  </section>
</template>
