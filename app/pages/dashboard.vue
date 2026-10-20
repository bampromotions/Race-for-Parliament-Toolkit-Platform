<script setup lang="ts">
import { courseId, courseModules } from '../data/course'
import { createCourseProgressRepository, type CourseProgress } from '../repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const { t, locale } = useI18n()
const localePath = useLocalePath()
const firebase = useFirebase()
const api = createCourseProgressRepository(firebase)
const progress = ref<CourseProgress | null>(null)
const latestResult = ref<{ score: number; passed: boolean; moduleId: number } | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const clientReady = ref(false)
const firstUnpassedModule = computed(() => courseModules.find((module) => !progress.value?.passedModules.includes(module.id)) ?? null)
const completion = computed(() => progress.value ? Math.round((progress.value.passedModules.length / courseModules.length) * 100) : 0)

useSeoMeta({ title: () => `${t('navigation.dashboard')} · ${t('brand.name')}` })

onMounted(async () => {
  clientReady.value = true
  try {
    progress.value = await api.getProgress()
    if (progress.value.latestAttemptId) {
      latestResult.value = await api.getAttempt(progress.value.latestAttemptId)
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="space-y-8">
    <header>
      <p class="text-sm font-semibold text-emerald-800">{{ t('brand.name') }}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">{{ t('dashboard.welcome', { name: clientReady ? firebase.session.value?.displayName || firebase.session.value?.email || '' : '' }) }}</h1>
      <p class="mt-2 text-slate-600">{{ t('dashboard.intro') }}</p>
    </header>

    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <div v-if="loading" role="status" class="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">{{ t('common.loading') }}</div>
    <template v-else-if="progress">
      <section class="grid gap-4 sm:grid-cols-2">
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h2 class="text-sm font-medium text-slate-600">{{ t('dashboard.overallProgress') }}</h2>
          <p class="mt-3 text-3xl font-bold text-slate-950">{{ completion }}%</p>
          <progress class="mt-4 h-2 w-full accent-emerald-800" :value="completion" max="100" :aria-label="t('dashboard.overallProgress')">{{ completion }}%</progress>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h2 class="text-sm font-medium text-slate-600">{{ t('dashboard.completedModules') }}</h2>
          <p class="mt-3 text-3xl font-bold text-slate-950">{{ progress.passedModules.length }} <span class="text-base font-medium text-slate-500">/ {{ courseModules.length }}</span></p>
        </div>
      </section>

      <section class="grid gap-6 lg:grid-cols-2">
        <article class="rounded-xl border border-slate-200 bg-white p-6">
          <p class="text-sm font-semibold text-emerald-800">{{ t('dashboard.currentModule') }}</p>
          <template v-if="firstUnpassedModule">
            <h2 class="mt-2 text-xl font-bold text-slate-950">{{ locale === 'en' ? firstUnpassedModule.titleEn : firstUnpassedModule.titleSt }}</h2>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ locale === 'en' ? firstUnpassedModule.descriptionEn : firstUnpassedModule.descriptionSt }}</p>
            <NuxtLink :to="localePath(`/course/${courseId}/module/${firstUnpassedModule.id}`)" class="mt-5 inline-flex rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900">
              {{ t('dashboard.openCourse') }}
            </NuxtLink>
          </template>
          <p v-else class="mt-3 text-sm leading-6 text-slate-600">{{ t('course.courseComplete') }}</p>
        </article>
        <article class="rounded-xl border border-slate-200 bg-white p-6">
          <h2 class="text-sm font-semibold text-slate-700">{{ t('dashboard.recentResult') }}</h2>
          <template v-if="latestResult">
            <p class="mt-3 text-3xl font-bold text-slate-950">{{ latestResult.score }}%</p>
            <p class="mt-1 text-sm text-slate-600">{{ locale === 'en' ? courseModules[latestResult.moduleId - 1]?.titleEn : courseModules[latestResult.moduleId - 1]?.titleSt }}</p>
          </template>
          <p v-else class="mt-3 text-sm leading-6 text-slate-600">{{ t('dashboard.noResult') }}</p>
        </article>
      </section>
    </template>
  </div>
</template>
