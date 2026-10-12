<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
const { t } = useI18n()
const localePath = useLocalePath()
const api = useFirebaseApi()
const records = ref<Array<{ id: string; displayName: string; email: string; organisation: string; passedModules: number; status: string }>>([])
const query = ref('')
const loading = ref(true)
const errorMessage = ref('')
const cursors = ref<Array<string | null>>([null])
const pageIndex = ref(0)
const nextCursor = ref<string | null>(null)
const filtered = computed(() => records.value.filter((record) =>
  `${record.displayName} ${record.email} ${record.organisation}`.toLowerCase().includes(query.value.toLowerCase()),
))

async function loadPage(cursor: string | null) {
  loading.value = true
  errorMessage.value = ''
  try {
    const url = cursor
      ? `/api/admin/participants?cursor=${encodeURIComponent(cursor)}`
      : '/api/admin/participants'
    const result = await api.request<{ participants: typeof records.value; nextCursor: string | null }>(url)
    records.value = result.participants
    nextCursor.value = result.nextCursor
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    loading.value = false
  }
}

onMounted(() => loadPage(null))

async function nextPage() {
  if (!nextCursor.value) return
  cursors.value = [...cursors.value.slice(0, pageIndex.value + 1), nextCursor.value]
  pageIndex.value += 1
  await loadPage(nextCursor.value)
}

async function previousPage() {
  if (pageIndex.value === 0) return
  pageIndex.value -= 1
  await loadPage(cursors.value[pageIndex.value] ?? null)
}
</script>

<template>
  <section class="space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('admin.participants') }}</h1>
      <p class="mt-2 text-slate-600">{{ records.length }}</p>
    </header>
    <label class="block max-w-md text-sm font-medium text-slate-700">
      {{ t('admin.participants') }}
      <input v-model="query" type="search" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20">
    </label>
    <p v-if="loading" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <div v-else-if="errorMessage" role="alert" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
      <p>{{ errorMessage }}</p>
      <button class="mt-3 font-semibold underline" @click="loadPage(cursors[pageIndex] ?? null)">{{ t('common.retry') }}</button>
    </div>
    <p v-else-if="filtered.length === 0" class="rounded-lg border border-slate-200 bg-white p-6 text-sm text-slate-600">{{ t('admin.empty') }}</p>
    <div v-else class="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table class="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
          <tr><th scope="col" class="px-4 py-3 font-semibold">{{ t('auth.fullName') }}</th><th scope="col" class="px-4 py-3 font-semibold">{{ t('auth.email') }}</th><th scope="col" class="px-4 py-3 font-semibold">{{ t('auth.organisation') }}</th><th scope="col" class="px-4 py-3 font-semibold">{{ t('progress.moduleProgress') }}</th><th scope="col" class="px-4 py-3 font-semibold">{{ t('admin.participantStatus') }}</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="item in filtered" :key="item.id" class="hover:bg-slate-50">
            <td class="px-4 py-3"><NuxtLink :to="localePath(`/admin/participants/${item.id}`)" class="font-semibold text-emerald-800 hover:underline">{{ item.displayName }}</NuxtLink></td>
            <td class="px-4 py-3 text-slate-600">{{ item.email }}</td>
            <td class="px-4 py-3 text-slate-600">{{ item.organisation || '—' }}</td>
            <td class="px-4 py-3 text-slate-600">{{ item.passedModules }} / 4</td>
            <td class="px-4 py-3 text-slate-600">{{ t(`admin.${item.status}`) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav v-if="!loading && !errorMessage" class="flex items-center justify-between" :aria-label="t('admin.participants')">
      <button type="button" :disabled="pageIndex === 0" class="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50" @click="previousPage">{{ t('common.previous') }}</button>
      <span class="text-sm text-slate-600">{{ pageIndex + 1 }}</span>
      <button type="button" :disabled="!nextCursor" class="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50" @click="nextPage">{{ t('common.next') }}</button>
    </nav>
  </section>
</template>
