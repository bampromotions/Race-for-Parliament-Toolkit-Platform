<script setup lang="ts">
import { courseId, courseModules } from '../../../data/course'
import { createCourseProgressRepository, type CourseProgress } from '../../../repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const route = useRoute()
if (route.params.courseId !== courseId) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
}

const { t, locale } = useI18n()
const localePath = useLocalePath()
const api = createCourseProgressRepository(useFirebaseApi().request)
const progress = ref<CourseProgress | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const completion = computed(() => progress.value ? Math.round(progress.value.passedModules.length * 100 / courseModules.length) : 0)

useSeoMeta({ title: () => `${t('course.title')} · ${t('brand.name')}` })

onMounted(async () => {
  try {
    progress.value = await api.getProgress()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})

function moduleState(id: number) {
  if (progress.value?.passedModules.includes(id)) return 'completed'
  if (id === 1 || progress.value?.passedModules.includes(id - 1)) return 'available'
  return 'locked'
}
</script>

<template>
  <div class="space-y-7">
    <header>
      <p class="text-sm font-semibold text-emerald-800">{{ t('navigation.course') }}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">{{ t('course.title') }}</h1>
      <p class="mt-3 max-w-3xl leading-7 text-slate-600">{{ t('course.description') }}</p>
    </header>
    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <section class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div class="flex items-center justify-between text-sm">
        <h2 class="font-semibold text-slate-900">{{ t('dashboard.overallProgress') }}</h2>
        <span class="font-semibold tabular-nums text-slate-700">{{ completion }}%</span>
      </div>
      <progress class="mt-3 h-2 w-full accent-emerald-800" :value="completion" max="100">{{ completion }}%</progress>
    </section>
    <section>
      <h2 class="mb-4 text-xl font-semibold text-slate-950">{{ t('course.modules') }}</h2>
      <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
      <ol v-else class="space-y-3">
        <li v-for="module in courseModules" :key="module.id">
          <NuxtLink
            v-if="moduleState(module.id) !== 'locked'"
            :to="localePath(`/course/${courseId}/module/${module.id}`)"
            class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-700/50 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ t('navigation.modules') }} {{ module.id }} · {{ t(`course.${moduleState(module.id)}`) }}</p>
              <h3 class="mt-1 font-semibold text-slate-950">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h3>
              <p class="mt-1 text-sm text-slate-600">{{ locale === 'en' ? module.descriptionEn : module.descriptionSt }}</p>
            </div>
            <span class="text-sm font-semibold text-emerald-800">{{ progress?.scores[String(module.id)] ?? (moduleState(module.id) === 'completed' ? 100 : 0) }}%</span>
          </NuxtLink>
          <div v-else class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-100 p-5 text-slate-500" aria-disabled="true">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide">{{ t('navigation.modules') }} {{ module.id }} · {{ t('course.locked') }}</p>
              <h3 class="mt-1 font-semibold">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h3>
            </div>
            <UIcon name="i-lucide-lock-keyhole" class="size-5" aria-hidden="true" />
          </div>
        </li>
      </ol>
    </section>
  </div>
</template>
