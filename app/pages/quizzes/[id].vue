<script setup lang="ts">
import type { StandaloneQuiz } from '../../types/standalone-quiz'

definePageMeta({ layout: 'participant', middleware: 'auth' })

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const api = useFirebaseApi()
const quiz = ref<StandaloneQuiz | null>(null)
const answers = reactive<Record<string, string[]>>({})
const result = ref<{ score: number; passed: boolean; questionCount: number } | null>(null)
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref('')

function chooseAnswer(questionId: string, value: string, multiple: boolean) {
  const current = answers[questionId] ?? []
  answers[questionId] = multiple
    ? current.includes(value) ? current.filter((answer) => answer !== value) : [...current, value]
    : [value]
}

async function submitQuiz() {
  if (!quiz.value) return
  if (quiz.value.questions.some((question) => !answers[question.id]?.length)) {
    errorMessage.value = t('admin.allQuestionsRequired')
    return
  }
  if (!window.confirm(t('course.quizConfirm'))) return

  pending.value = true
  errorMessage.value = ''
  try {
    result.value = await api.request(`/api/quizzes/${encodeURIComponent(quiz.value.id)}/submit`, {
      method: 'POST',
      body: { answers },
    })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    pending.value = false
  }
}

onMounted(async () => {
  try {
    quiz.value = await api.request<StandaloneQuiz>(`/api/quizzes/${encodeURIComponent(String(route.params.id))}`)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="mx-auto max-w-3xl space-y-6">
    <NuxtLink :to="localePath('/quizzes')" class="text-sm font-semibold text-emerald-800 hover:underline">
      ← {{ t('navigation.quizzes') }}
    </NuxtLink>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage && !quiz" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <template v-else-if="quiz">
      <header>
        <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ locale === 'en' ? quiz.titleEn : quiz.titleSt }}</h1>
        <p class="mt-2 text-sm text-slate-600">{{ t('course.questionCount', { count: quiz.questions.length }) }}</p>
      </header>
      <section v-if="result" role="status" class="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 class="text-lg font-semibold text-emerald-950">{{ t('admin.quizScore') }}: {{ result.score }}%</h2>
        <p class="mt-1 text-sm text-emerald-900">{{ result.passed ? t('admin.quizPassed') : t('admin.quizNotPassed') }}</p>
        <NuxtLink :to="localePath('/quizzes')" class="mt-4 inline-flex font-semibold text-emerald-900 underline">{{ t('navigation.quizzes') }}</NuxtLink>
      </section>
      <form v-else class="space-y-5" @submit.prevent="submitQuiz">
        <fieldset v-for="(question, index) in quiz.questions" :key="question.id" class="rounded-xl border border-slate-200 bg-white p-5">
          <legend class="max-w-full px-1 text-sm font-semibold text-slate-950">
            <span class="mr-1 text-slate-500">{{ t('course.question', { current: index + 1, total: quiz.questions.length }) }}.</span>
            {{ locale === 'en' ? question.promptEn : question.promptSt }}
          </legend>
          <div class="mt-3 space-y-2">
            <label v-for="option in question.options" :key="option.value" class="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
              <input
                :type="question.type === 'multiple' ? 'checkbox' : 'radio'"
                :name="question.id"
                :checked="answers[question.id]?.includes(option.value) ?? false"
                class="mt-0.5 size-4 accent-emerald-800"
                @change="chooseAnswer(question.id, option.value, question.type === 'multiple')"
              >
              <span class="text-sm text-slate-700">{{ locale === 'en' ? option.labelEn : option.labelSt }}</span>
            </label>
          </div>
        </fieldset>
        <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
        <button type="submit" :disabled="pending" class="rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">
          {{ pending ? t('common.loading') : t('admin.submitStandaloneQuiz') }}
        </button>
      </form>
    </template>
  </section>
</template>
