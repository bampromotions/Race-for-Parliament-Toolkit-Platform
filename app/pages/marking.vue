<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'staff', staffRoles: ['admin', 'marker'] })

interface ReviewQuestion {
  id: string
  type: 'single' | 'multiple' | 'truefalse'
  promptEn: string
  promptSt: string
  correctAnswers: string[]
  options: Array<{ value: string; labelEn: string; labelSt: string }>
}

interface ReviewAttempt {
  id: string
  participantName: string
  moduleId: number
  moduleTitleEn: string
  moduleTitleSt: string
  score: number
  automaticScore: number
  answers: Record<string, string[]>
  createdAt: string | null
  questions: ReviewQuestion[]
}

const { t, locale } = useI18n()
const api = useFirebaseApi()
const attempts = ref<ReviewAttempt[]>([])
const scores = reactive<Record<string, number>>({})
const feedback = reactive<Record<string, string>>({})
const submittingId = ref('')
const loading = ref(true)
const errorMessage = ref('')
const attemptErrors = reactive<Record<string, string>>({})

async function loadAttempts() {
  loading.value = true
  errorMessage.value = ''
  try {
    const response = await api.request<{ attempts: ReviewAttempt[] }>('/api/marker/attempts')
    attempts.value = response.attempts
    for (const attempt of attempts.value) scores[attempt.id] = attempt.score
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
}

function answerLabels(question: ReviewQuestion, values: string[] | undefined) {
  return (values ?? []).map((value) => {
    const option = question.options.find((item) => item.value === value)
    return option ? (locale.value === 'en' ? option.labelEn : option.labelSt) : value
  }).join(', ') || t('admin.noAnswer')
}

async function markAttempt(attempt: ReviewAttempt) {
  submittingId.value = attempt.id
  attemptErrors[attempt.id] = ''
  try {
    await api.request(`/api/marker/attempts/${encodeURIComponent(attempt.id)}`, {
      method: 'POST',
      body: { score: scores[attempt.id], feedback: feedback[attempt.id] ?? '' },
    })
    attempts.value = attempts.value.filter((item) => item.id !== attempt.id)
  } catch (error) {
    attemptErrors[attempt.id] = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    submittingId.value = ''
  }
}

onMounted(loadAttempts)
</script>

<template>
  <section class="space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.markingTitle') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('admin.markingIntro') }}</p>
    </header>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p v-else-if="attempts.length === 0" class="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">{{ t('admin.noPendingMarking') }}</p>
    <ol v-else class="space-y-5">
      <li v-for="attempt in attempts" :key="attempt.id" class="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
        <header class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 class="font-semibold text-slate-950">{{ attempt.participantName }}</h2>
            <p class="mt-1 text-sm text-slate-600">
              {{ t('admin.moduleLabel') }} {{ attempt.moduleId }} ·
              {{ locale === 'en' ? attempt.moduleTitleEn : attempt.moduleTitleSt }}
            </p>
            <p class="mt-1 text-xs text-slate-500">{{ t('admin.automaticScore') }}: {{ attempt.automaticScore }}%</p>
          </div>
          <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">{{ t('admin.pendingReview') }}</span>
        </header>
        <ol class="space-y-3">
          <li v-for="(question, index) in attempt.questions" :key="question.id" class="rounded-lg bg-slate-50 p-4">
            <h3 class="text-sm font-semibold text-slate-900">{{ index + 1 }}. {{ locale === 'en' ? question.promptEn : question.promptSt }}</h3>
            <p class="mt-2 text-sm text-slate-700"><span class="font-medium">{{ t('admin.participantAnswer') }}:</span> {{ answerLabels(question, attempt.answers[question.id]) }}</p>
            <p class="mt-1 text-sm text-emerald-900"><span class="font-medium">{{ t('admin.correctAnswer') }}:</span> {{ answerLabels(question, question.correctAnswers) }}</p>
          </li>
        </ol>
        <form class="grid gap-4 border-t border-slate-200 pt-4 sm:grid-cols-[12rem_1fr]" @submit.prevent="markAttempt(attempt)">
          <label class="block text-sm font-medium text-slate-700">
            {{ t('admin.finalScore') }} (%)
            <input v-model.number="scores[attempt.id]" type="number" min="0" max="100" step="1" required class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
          </label>
          <label class="block text-sm font-medium text-slate-700">
            {{ t('admin.markerFeedback') }}
            <textarea v-model="feedback[attempt.id]" maxlength="1000" rows="2" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5" />
          </label>
          <p v-if="attemptErrors[attempt.id]" role="alert" class="text-sm text-red-700 sm:col-span-2">{{ attemptErrors[attempt.id] }}</p>
          <div class="sm:col-span-2">
            <button type="submit" :disabled="submittingId === attempt.id" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50">
              {{ submittingId === attempt.id ? t('common.loading') : t('admin.saveMark') }}
            </button>
          </div>
        </form>
      </li>
    </ol>
  </section>
</template>
