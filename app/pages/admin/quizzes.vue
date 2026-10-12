<script setup lang="ts">
import { courseModules } from '../../data/course'

definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t, locale } = useI18n()
const questions = computed(() => courseModules.flatMap((module) => module.quiz.map((question) => ({
  ...question,
  moduleId: module.id,
  moduleTitle: locale.value === 'en' ? module.titleEn : module.titleSt,
}))))
</script>

<template>
  <section class="space-y-6">
    <header><h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('navigation.quizzes') }}</h1></header>
    <ol class="space-y-3">
      <li v-for="question in questions" :key="question.id" class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">{{ question.moduleTitle }} · {{ t('admin.moduleLabel') }} {{ question.moduleId }}</p>
        <h2 class="mt-2 font-semibold text-slate-950">{{ locale === 'en' ? question.promptEn : question.promptSt }}</h2>
        <ul class="mt-3 grid gap-2 sm:grid-cols-2">
          <li v-for="option in question.options" :key="option.value" class="rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-700">{{ locale === 'en' ? option.labelEn : option.labelSt }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>
