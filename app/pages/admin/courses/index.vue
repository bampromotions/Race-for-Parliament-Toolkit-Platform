<script setup lang="ts">
import { courseId, courseModules } from '../../../data/course'

definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.courses') }}</h1>
    </header>
    <NuxtLink :to="localePath(`/admin/courses/${courseId}`)" class="block rounded-xl border border-slate-200 bg-white p-5 transition hover:border-emerald-700/50">
      <h2 class="font-semibold text-slate-950">{{ t('course.title') }}</h2>
      <p class="mt-2 text-sm text-slate-600">{{ courseModules.length }} {{ t('course.modules') }}</p>
    </NuxtLink>
  </section>
</template>
