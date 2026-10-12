<script setup lang="ts">
import { courseModules } from '../../data/course'

definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t, locale } = useI18n()
</script>

<template>
  <section class="space-y-6">
    <header><h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('navigation.modules') }}</h1></header>
    <ol class="space-y-3">
      <li v-for="module in courseModules" :key="module.id" class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ t('admin.courses') }} · {{ module.id }}</p>
        <h2 class="mt-1 font-semibold text-slate-950">{{ locale === 'en' ? module.titleEn : module.titleSt }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ locale === 'en' ? module.descriptionEn : module.descriptionSt }}</p>
      </li>
    </ol>
  </section>
</template>
