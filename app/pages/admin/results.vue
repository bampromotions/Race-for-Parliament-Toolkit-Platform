<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t, locale } = useI18n()
const api = useFirebaseApi()
const results = ref<Array<{ id: string; participantName: string; moduleId?: number; quizTitleEn?: string; quizTitleSt?: string; score: number; passed: boolean; reviewStatus: 'pending' | 'reviewed' | 'unavailable' }>>([])
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const response = await api.request<{ results: typeof results.value }>('/api/admin/results')
    results.value = response.results
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.results') }}</h1>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <p v-else-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">{{ errorMessage }}</p>
    <p v-else-if="results.length === 0" class="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">{{ t('admin.empty') }}</p>
    <div v-else class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table class="w-full min-w-[720px] text-left text-sm">
        <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-600"><tr><th class="px-4 py-3">{{ t('auth.fullName') }}</th><th class="px-4 py-3">{{ t('navigation.quizzes') }}</th><th class="px-4 py-3">{{ t('progress.quizPerformance') }}</th><th class="px-4 py-3">{{ t('course.result') }}</th><th class="px-4 py-3">{{ t('admin.reviewStatus') }}</th></tr></thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="item in results" :key="item.id">
            <td class="px-4 py-3 font-medium text-slate-900">{{ item.participantName }}</td>
            <td class="px-4 py-3 text-slate-600">{{ item.quizTitleEn ? (locale === 'en' ? item.quizTitleEn : item.quizTitleSt) : `${t('admin.moduleLabel')} ${item.moduleId}` }}</td>
            <td class="px-4 py-3 text-slate-600">{{ item.score }}%</td>
            <td class="px-4 py-3" :class="item.passed ? 'text-emerald-800' : 'text-amber-800'">{{ item.passed ? t('course.passed') : t('course.notPassed') }}</td>
            <td class="px-4 py-3 text-slate-600">
              {{ item.reviewStatus === 'reviewed' ? t('admin.reviewed') : item.reviewStatus === 'pending' ? t('admin.pending') : t('admin.notAvailable') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
