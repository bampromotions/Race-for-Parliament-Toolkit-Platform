<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-50">
    <header class="flex min-h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <NuxtLink :to="localePath('/')" class="text-sm font-bold text-slate-950">{{ t('brand.name') }}</NuxtLink>
      <LanguageSwitcher />
    </header>
    <main class="flex flex-1 items-center justify-center px-4 py-10">
      <slot />
    </main>
  </div>
</template>
