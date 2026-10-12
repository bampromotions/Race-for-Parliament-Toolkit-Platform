<script setup lang="ts">
definePageMeta({ layout: 'auth', middleware: 'guest' })

const { t } = useI18n()
const localePath = useLocalePath()
const firebase = useFirebase()
const auth = useAuth()
const email = ref('')
const pending = ref(false)
const complete = ref(false)
const errorMessage = ref('')

async function submit() {
  pending.value = true
  errorMessage.value = ''
  try {
    await auth.resetPassword(email.value)
    complete.value = true
  } catch {
    errorMessage.value = t('auth.authError')
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section class="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <h1 class="text-2xl font-bold tracking-tight text-slate-950">{{ t('auth.forgotPassword') }}</h1>
    <UAlert v-if="!firebase.configured" class="mt-6" color="warning" variant="subtle" :description="t('common.notConfigured')" />
    <p v-if="complete" role="status" class="mt-5 text-sm text-emerald-900">{{ t('auth.passwordResetSent') }}</p>
    <form v-else class="mt-6 space-y-5" @submit.prevent="submit">
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.email') }}<input v-model="email" required type="email" autocomplete="email" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <button type="submit" :disabled="pending || !firebase.configured" class="w-full rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-50">{{ pending ? t('common.loading') : t('auth.resetPassword') }}</button>
    </form>
    <NuxtLink :to="localePath('/auth/login')" class="mt-5 block text-center text-sm font-medium text-emerald-800 underline">{{ t('common.back') }}</NuxtLink>
  </section>
</template>
