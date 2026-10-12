<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav :aria-label="t('navigation.language')" class="flex items-center gap-1 text-sm">
    <NuxtLink
      v-for="item in locales"
      :key="typeof item === 'string' ? item : item.code"
      :to="switchLocalePath(typeof item === 'string' ? item : item.code)"
      class="rounded-md px-2.5 py-1.5 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      :class="locale === (typeof item === 'string' ? item : item.code)
        ? 'bg-emerald-50 text-emerald-900'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'"
      :aria-current="locale === (typeof item === 'string' ? item : item.code) ? 'page' : undefined"
    >
      {{ t((typeof item === 'string' ? item : item.code) === 'en' ? 'common.english' : 'common.sesotho') }}
    </NuxtLink>
  </nav>
</template>
