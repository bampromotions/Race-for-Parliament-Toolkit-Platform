<script setup lang="ts">
import { courseId, courseModules } from '../../../../data/course'
import { createCourseProgressRepository, type CourseProgress } from '../../../../repositories/courseProgressRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const route = useRoute()
if (route.params.courseId !== courseId) {
  throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
}
const moduleId = Number(route.params.moduleId)
const module = courseModules.find((item) => item.id === moduleId)
if (!module) throw createError({ statusCode: 404, statusMessage: 'Module not found.' })

const { t, locale } = useI18n()
const localePath = useLocalePath()
const api = createCourseProgressRepository(useFirebaseApi().request)
const progress = ref<CourseProgress | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const unlocked = computed(() => moduleId === 1 || Boolean(progress.value?.passedModules.includes(moduleId - 1)))

useSeoMeta({
  title: () => `${locale.value === 'en' ? module.titleEn : module.titleSt} · ${t('brand.name')}`,
})

onMounted(async () => {
  try {
    progress.value = await api.getProgress()
    if (!unlocked.value) await navigateTo(localePath(`/course/${courseId}`), { replace: true })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-7">
    <NuxtLink :to="localePath(`/course/${courseId}`)" class="text-sm font-semibold text-emerald-800 hover:underline">← {{ t('navigation.course') }}</NuxtLink>
    <header>
      <p class="text-sm font-semibold text-emerald-800">{{ t('navigation.modules') }} {{ module.id }}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-slate-950">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h1>
      <p class="mt-3 leading-7 text-slate-600">{{ locale === 'en' ? module.descriptionEn : module.descriptionSt }}</p>
    </header>
    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <div v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</div>
    <template v-else-if="unlocked">
      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-slate-950">{{ t('course.courseMaterial') }}</h2>
        <article v-for="item in module.material" :key="item.titleEn" class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <h3 class="font-semibold text-slate-950">{{ locale === 'en' ? item.titleEn : item.titleSt }}</h3>
          <p class="mt-3 leading-7 text-slate-700">{{ locale === 'en' ? item.bodyEn : item.bodySt }}</p>
        </article>
      </section>
      <NuxtLink :to="localePath(`/course/${courseId}/module/${module.id}/quiz`)" class="inline-flex rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900">
        {{ t('course.startQuiz') }}
      </NuxtLink>
    </template>
  </div>
</template>
