<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { t } = useI18n()
const localePath = useLocalePath()
useSeoMeta({
  title: () => t('brand.name'),
  description: () => t('home.description'),
  ogTitle: () => t('brand.name'),
  ogDescription: () => t('home.description'),
})
</script>

<template>
  <section class="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">{{ t('home.eyebrow') }}</p>
      <h1 class="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {{ t('home.title') }}
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{{ t('home.description') }}</p>
      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink :to="localePath('/auth/register')" class="rounded-md bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
          {{ t('home.getStarted') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/course')" class="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
          {{ t('navigation.course') }}
        </NuxtLink>
      </div>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 class="text-xl font-semibold text-slate-950">{{ t('home.featuresTitle') }}</h2>
      <ul class="mt-6 divide-y divide-slate-200">
        <li v-for="(label, index) in [t('home.modules'), t('home.languages'), t('home.progress')]" :key="label" class="flex items-center gap-4 py-4">
          <span class="grid size-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-900">{{ index + 1 }}</span>
          <span class="text-sm font-medium text-slate-700">{{ label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
