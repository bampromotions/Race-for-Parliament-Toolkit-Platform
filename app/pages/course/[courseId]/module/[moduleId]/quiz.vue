<script setup lang="ts">
import { courseId, courseModules } from '~/data/course'
import type { CourseQuestion } from '~/data/course'
import { createCourseProgressRepository, type CourseProgress } from '~/repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const route = useRoute()
if (route.params.courseId !== courseId) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
}
const moduleId = Number(route.params.moduleId)
const module = courseModules.find((item) => item.id === moduleId)
if (!module) throw createError({ statusCode: 404, statusMessage: 'Module not found.' })

const { t, locale } = useI18n()
const api = createCourseProgressRepository(useFirebase())
const answers = reactive<Record<string, string[]>>({})
const questions = ref<CourseQuestion[]>(module.quiz)
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const progress: CourseProgress = await api.getProgress()
    if (moduleId > 1 && !progress.passedModules.includes(moduleId - 1)) {
      await navigateTo(localePath(`/course/${courseId}`), { replace: true })
      return
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})

function toggleAnswer(questionId: string, value: string, multiple: boolean) {
  const current = answers[questionId] ?? []
  answers[questionId] = multiple
    ? current.includes(value) ? current.filter((answer) => answer !== value) : [...current, value]
    : [value]
}

</script>

<template>
  <div class="mx-auto max-w-3xl space-y-7">
    <NuxtLink :to="localePath(`/course/${courseId}/module/${moduleId}`)" class="text-sm font-semibold text-emerald-800 hover:underline">← {{ locale === 'en' ? module.titleEn : module.titleSt }}</NuxtLink>
    <header>
      <p class="text-sm font-semibold text-emerald-800">{{ t('navigation.modules') }} {{ module.id }}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">{{ t('course.startQuiz') }}</h1>
      <p class="mt-2 text-sm text-slate-600">{{ t('course.questionCount', { count: questions.length }) }}</p>
    </header>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p role="status" class="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{{ t('course.quizSubmissionUnavailable') }}</p>
    <form v-if="!loading" class="space-y-5">
      <fieldset v-for="(question, index) in questions" :key="question.id" class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <legend class="max-w-full px-1 text-sm font-semibold text-slate-950">
          <span class="mr-1 text-slate-500">{{ t('course.question', { current: index + 1, total: questions.length }) }}.</span>
          {{ locale === 'en' ? question.promptEn : question.promptSt }}
        </legend>
        <div class="mt-3 space-y-2">
          <label v-for="option in question.options" :key="option.value" class="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
            <input
              :type="question.type === 'multiple' ? 'checkbox' : 'radio'"
              :name="question.id"
              :checked="answers[question.id]?.includes(option.value) ?? false"
              class="mt-0.5 size-4 accent-emerald-800"
              @change="toggleAnswer(question.id, option.value, question.type === 'multiple')"
            >
            <span class="text-sm text-slate-700">{{ locale === 'en' ? option.labelEn : option.labelSt }}</span>
          </label>
        </div>
      </fieldset>
      <button type="button" disabled class="rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white opacity-50">
        {{ t('course.submitQuiz') }}
      </button>
    </form>
  </div>
</template>
