<script setup lang="ts">
import { courseId, courseModules } from '~/data/course'
import { createCourseProgressRepository, type QuizAttemptResult } from '~/repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const route = useRoute()
if (route.params.courseId !== courseId) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
}
const moduleId = Number(route.params.moduleId)
if (!Number.isInteger(moduleId) || !courseModules.some((item) => item.id === moduleId)) {
  throw createError({ statusCode: 404, statusMessage: 'Module not found.' })
}

const { t } = useI18n()
const localePath = useLocalePath()
const api = createCourseProgressRepository(useFirebaseApi().request)
const result = ref<QuizAttemptResult | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const nextModule = moduleId + 1

onMounted(async () => {
  const attemptId = route.query.attemptId
  if (typeof attemptId !== 'string') {
    errorMessage.value = t('common.unexpectedError')
    loading.value = false
    return
  }

  try {
    const attempt = await api.getAttempt(attemptId)
    if (attempt.moduleId !== moduleId) throw createError({ statusCode: 404, statusMessage: 'Quiz result not found.' })
    result.value = attempt
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-9">
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
    <template v-else-if="result">
      <p class="text-sm font-semibold text-emerald-800">{{ t('course.result') }}</p>
      <h1 class="mt-3 text-4xl font-bold tracking-tight text-slate-950">{{ result.score }}%</h1>
      <p class="mt-2 text-base font-semibold" :class="result.passed ? 'text-emerald-800' : 'text-amber-800'">
        {{ result.passed ? t('course.passed') : t('course.notPassed') }}
      </p>
      <p v-if="result.reviewStatus === 'pending'" class="mt-3 text-sm leading-6 text-slate-600">{{ t('course.awaitingReview') }}</p>
      <p v-if="result.reviewStatus === 'reviewed' && result.reviewerFeedback" class="mt-3 rounded-lg bg-slate-50 p-3 text-left text-sm leading-6 text-slate-700">
        <span class="font-semibold">{{ t('course.markerFeedback') }}:</span> {{ result.reviewerFeedback }}
      </p>
      <p v-if="!result.passed" class="mt-3 text-sm leading-6 text-slate-600">{{ t('course.passThreshold') }}</p>
      <div class="mt-7 flex flex-wrap justify-center gap-3">
        <NuxtLink v-if="result.passed && nextModule <= 4" :to="localePath(`/course/${courseId}/module/${nextModule}`)" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">{{ t('course.nextModule') }}</NuxtLink>
        <NuxtLink v-else-if="!result.passed" :to="localePath(`/course/${courseId}/module/${moduleId}/quiz`)" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">{{ t('course.retryQuiz') }}</NuxtLink>
        <NuxtLink v-else :to="localePath('/progress')" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">{{ t('navigation.progress') }}</NuxtLink>
      </div>
    </template>
  </section>
</template>
