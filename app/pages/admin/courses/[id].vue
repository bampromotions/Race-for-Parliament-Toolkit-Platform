<script setup lang="ts">
import { courseId, courseModules, type CourseMaterial } from '../../../data/course'

definePageMeta({ layout: 'admin', middleware: 'admin' })
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const api = useFirebaseApi()
if (route.params.id !== courseId) throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
const selectedModule = ref(1)
const titleEn = ref('')
const titleSt = ref('')
const bodyEn = ref('')
const bodySt = ref('')
const materials = ref<Array<CourseMaterial & { id: string; moduleId: number }>>([])
const loading = ref(true)
const pending = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

async function loadMaterials() {
  loading.value = true
  errorMessage.value = ''
  try {
    const response = await api.request<{ materials: typeof materials.value }>('/api/admin/materials')
    materials.value = response.materials
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
}

async function addMaterial() {
  pending.value = true
  errorMessage.value = ''
  successMessage.value = ''
  try {
    await api.request('/api/admin/materials', {
      method: 'POST',
      body: {
        moduleId: selectedModule.value,
        titleEn: titleEn.value,
        titleSt: titleSt.value,
        bodyEn: bodyEn.value,
        bodySt: bodySt.value,
      },
    })
    titleEn.value = ''
    titleSt.value = ''
    bodyEn.value = ''
    bodySt.value = ''
    successMessage.value = t('admin.materialAdded')
    await loadMaterials()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    pending.value = false
  }
}

onMounted(loadMaterials)
</script>

<template>
  <section class="space-y-6">
    <NuxtLink :to="localePath('/admin/courses')" class="text-sm font-semibold text-emerald-800 hover:underline">← {{ t('admin.courses') }}</NuxtLink>
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('course.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('course.description') }}</p>
    </header>
    <form class="space-y-4 rounded-xl border border-slate-200 bg-white p-5" @submit.prevent="addMaterial">
      <h2 class="text-lg font-semibold text-slate-950">{{ t('admin.addLessonMaterial') }}</h2>
      <label class="block text-sm font-medium text-slate-700">
        {{ t('admin.moduleLabel') }}
        <select v-model.number="selectedModule" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
          <option v-for="module in courseModules" :key="module.id" :value="module.id">{{ locale === 'en' ? module.titleEn : module.titleSt }}</option>
        </select>
      </label>
      <div class="grid gap-4 sm:grid-cols-2">
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.materialTitleEnglish') }}
          <input v-model="titleEn" required maxlength="200" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.materialTitleSesotho') }}
          <input v-model="titleSt" required maxlength="200" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5">
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.materialBodyEnglish') }}
          <textarea v-model="bodyEn" required maxlength="8000" rows="5" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5" />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          {{ t('admin.materialBodySesotho') }}
          <textarea v-model="bodySt" required maxlength="8000" rows="5" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5" />
        </label>
      </div>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <p v-if="successMessage" role="status" class="text-sm text-emerald-800">{{ successMessage }}</p>
      <button type="submit" :disabled="pending" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50">{{ pending ? t('common.loading') : t('admin.addLessonMaterial') }}</button>
    </form>
    <section class="space-y-3">
      <h2 class="text-xl font-semibold text-slate-950">{{ t('admin.addedMaterials') }}</h2>
      <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
      <p v-else-if="materials.length === 0" class="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">{{ t('admin.noAddedMaterials') }}</p>
      <ol v-else class="space-y-3">
        <li v-for="material in materials" :key="material.id" class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ t('admin.moduleLabel') }} {{ material.moduleId }}</p>
          <h3 class="mt-2 font-semibold text-slate-950">{{ locale === 'en' ? material.titleEn : material.titleSt }}</h3>
        </li>
      </ol>
    </section>
    <ol class="space-y-3">
      <li v-for="module in courseModules" :key="module.id" class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ t('navigation.modules') }} {{ module.id }}</p>
        <h2 class="mt-1 font-semibold text-slate-950">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ module.quiz.length }} {{ t('navigation.quizzes') }}</p>
      </li>
    </ol>
  </section>
</template>
