<script setup lang="ts">
import { courseId, courseModules } from '../data/course'
import { createCourseProgressRepository, type CourseProgress } from '../repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const { t, locale } = useI18n()
const api = createCourseProgressRepository(useFirebase())
const progress = ref<CourseProgress | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const completion = computed(() => progress.value ? Math.round(progress.value.passedModules.length * 100 / courseModules.length) : 0)

onMounted(async () => {
  try {
    progress.value = await api.getProgress()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="space-y-7">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('progress.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('course.title') }}</p>
    </header>
    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p v-else-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <template v-else-if="progress">
      <section class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <div class="flex items-center justify-between gap-4">
          <h2 class="font-semibold text-slate-900">{{ t('progress.overall') }}</h2>
          <span class="font-semibold tabular-nums">{{ completion }}%</span>
        </div>
        <progress class="mt-4 h-2 w-full accent-emerald-800" :value="completion" max="100">{{ completion }}%</progress>
      </section>
      <section>
        <h2 class="mb-4 text-xl font-semibold text-slate-950">{{ t('progress.moduleProgress') }}</h2>
        <p v-if="progress.passedModules.length === 0" class="mb-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-600">{{ t('progress.empty') }}</p>
        <ul class="space-y-3">
          <li v-for="module in courseModules" :key="module.id" class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <div class="flex items-center justify-between gap-4">
              <h3 class="font-medium text-slate-900">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h3>
              <span class="text-sm font-semibold tabular-nums text-slate-700">{{ progress.scores[String(module.id)] ?? 0 }}%</span>
            </div>
            <progress class="mt-3 h-2 w-full accent-emerald-800" :value="progress.passedModules.includes(module.id) ? 100 : progress.scores[String(module.id)] ?? 0" max="100">{{ progress.scores[String(module.id)] ?? 0 }}%</progress>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>
