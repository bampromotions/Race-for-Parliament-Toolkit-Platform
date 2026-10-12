<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
const route = useRoute()
const { t } = useI18n()
const api = useFirebaseApi()
const detail = ref<{ profile: Record<string, unknown>; progress: Record<string, unknown> | null; attempts: Array<Record<string, unknown>> } | null>(null)
const loading = ref(true)
const errorMessage = ref('')
const passedModules = computed(() => {
  const modules = detail.value?.progress?.passedModules
  return Array.isArray(modules) ? modules.length : 0
})

onMounted(async () => {
  try {
    detail.value = await api.request(`/api/admin/participants/${encodeURIComponent(String(route.params.id))}`)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.participants') }}</h1>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <template v-else-if="detail">
      <article class="rounded-xl border border-slate-200 bg-white p-5">
        <h2 class="text-xl font-semibold text-slate-950">{{ detail.profile.displayName }}</h2>
        <p class="mt-1 text-sm text-slate-600">{{ detail.profile.email }}</p>
        <p class="mt-1 text-sm text-slate-600">{{ detail.profile.organisation || '—' }}</p>
      </article>
      <section class="rounded-xl border border-slate-200 bg-white p-5">
        <h2 class="font-semibold text-slate-950">{{ t('progress.title') }}</h2>
        <p class="mt-2 text-sm text-slate-600">{{ detail.progress ? `${passedModules} / 4` : t('progress.empty') }}</p>
      </section>
      <section class="rounded-xl border border-slate-200 bg-white p-5">
        <h2 class="font-semibold text-slate-950">{{ t('admin.results') }}</h2>
        <ul v-if="detail.attempts.length" class="mt-3 divide-y divide-slate-100">
          <li v-for="attempt in detail.attempts" :key="String(attempt.id)" class="flex justify-between gap-4 py-3 text-sm"><span>{{ t('navigation.modules') }} {{ attempt.moduleId }}</span><span class="font-semibold">{{ attempt.score }}% · {{ attempt.passed ? t('course.passed') : t('course.notPassed') }}</span></li>
        </ul>
        <p v-else class="mt-3 text-sm text-slate-600">{{ t('admin.empty') }}</p>
      </section>
    </template>
  </section>
</template>
