<script setup lang="ts">
import type { StandaloneQuizSummary } from '../../types/standalone-quiz'

definePageMeta({ layout: 'participant', middleware: 'auth' })

const { t, locale } = useI18n()
const localePath = useLocalePath()
const api = useFirebaseApi()
const quizzes = ref<StandaloneQuizSummary[]>([])
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const result = await api.request<{ quizzes: StandaloneQuizSummary[] }>('/api/quizzes')
    quizzes.value = result.quizzes
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="mx-auto max-w-4xl space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('navigation.quizzes') }}</h1>
      <p class="mt-2 text-sm text-slate-600">{{ t('admin.publishedQuizzes') }}</p>
    </header>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p v-else-if="quizzes.length === 0" class="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">{{ t('admin.noPublishedQuizzes') }}</p>
    <ul v-else class="grid gap-4 sm:grid-cols-2">
      <li v-for="quiz in quizzes" :key="quiz.id" class="rounded-xl border border-slate-200 bg-white p-5">
        <h2 class="text-lg font-semibold text-slate-950">{{ locale === 'en' ? quiz.titleEn : quiz.titleSt }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ t('admin.quizQuestionCount', { count: quiz.questionCount }) }}</p>
        <NuxtLink :to="localePath(`/quizzes/${quiz.id}`)" class="mt-4 inline-flex rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">
          {{ t('admin.startQuiz') }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
