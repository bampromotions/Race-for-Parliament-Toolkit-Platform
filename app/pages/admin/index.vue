<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t } = useI18n()
const api = useFirebaseApi()
const metrics = ref<{ totalParticipants: number; completed: number; inProgress: number; notStarted: number; averageScore: number | null } | null>(null)
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    metrics.value = await api.request('/api/admin/overview')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="space-y-7">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('admin.participants') }} · {{ t('admin.results') }}</p>
    </header>
    <p v-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p v-else-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <section v-else-if="metrics" class="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      <article v-for="item in [
        { label: t('admin.totalParticipants'), value: metrics.totalParticipants },
        { label: t('admin.completed'), value: metrics.completed },
        { label: t('admin.inProgress'), value: metrics.inProgress },
        { label: t('admin.notStarted'), value: metrics.notStarted },
        { label: t('admin.averageScore'), value: metrics.averageScore === null ? '—' : `${metrics.averageScore}%` },
      ]" :key="item.label" class="rounded-xl border border-slate-200 bg-white p-5">
        <p class="text-sm text-slate-600">{{ item.label }}</p>
        <p class="mt-3 text-3xl font-bold tabular-nums text-slate-950">{{ item.value }}</p>
      </article>
    </section>
  </div>
</template>
