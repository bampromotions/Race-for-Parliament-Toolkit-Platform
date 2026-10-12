<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-900">
    <header class="border-b border-slate-200">
      <div class="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <NuxtLink :to="localePath('/')" class="text-sm font-bold tracking-tight text-slate-950">
          {{ t('brand.name') }}
        </NuxtLink>
        <div class="flex items-center gap-3">
          <LanguageSwitcher />
          <NuxtLink :to="localePath('/auth/login')" class="rounded-md bg-emerald-800 px-3.5 py-2 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
            {{ t('home.signIn') }}
          </NuxtLink>
        </div>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t border-slate-200">
      <div class="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500 sm:px-6 lg:px-8">
        {{ t('brand.name') }} · {{ t('brand.tagline') }}
      </div>
    </footer>
  </div>
</template>
