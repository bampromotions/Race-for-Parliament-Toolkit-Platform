<script setup lang="ts">
import { courseId, courseModules } from '../../../data/course'

definePageMeta({ layout: 'admin', middleware: 'admin' })
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
if (route.params.id !== courseId) throw createError({ statusCode: 404, statusMessage: 'Course not found.' })
</script>

<template>
  <section class="space-y-6">
    <NuxtLink :to="localePath('/admin/courses')" class="text-sm font-semibold text-emerald-800 hover:underline">← {{ t('admin.courses') }}</NuxtLink>
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('course.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('course.description') }}</p>
    </header>
    <ol class="space-y-3">
      <li v-for="module in courseModules" :key="module.id" class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ t('navigation.modules') }} {{ module.id }}</p>
        <h2 class="mt-1 font-semibold text-slate-950">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ module.quiz.length }} {{ t('navigation.quizzes') }}</p>
      </li>
    </ol>
  </section>
</template>
