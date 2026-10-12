<script setup lang="ts">
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth'

definePageMeta({ layout: 'auth', middleware: 'guest' })
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const firebase = useFirebase()
const newPassword = ref('')
const confirmation = ref('')
const pending = ref(false)
const verified = ref(false)
const complete = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  const code = route.query.oobCode
  if (!firebase.configured || typeof code !== 'string') {
    errorMessage.value = t('auth.authError')
    return
  }
  try {
    const { auth } = firebase.requireFirebase()
    await verifyPasswordResetCode(auth, code)
    verified.value = true
  } catch {
    errorMessage.value = t('auth.authError')
  }
})

async function submit() {
  if (newPassword.value !== confirmation.value) {
    errorMessage.value = t('auth.passwordMismatch')
    return
  }
  pending.value = true
  errorMessage.value = ''
  try {
    const code = route.query.oobCode
    if (typeof code !== 'string') throw new Error(t('auth.authError'))
    const { auth } = firebase.requireFirebase()
    await confirmPasswordReset(auth, code, newPassword.value)
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
    <h1 class="text-2xl font-bold tracking-tight text-slate-950">{{ t('auth.resetPassword') }}</h1>
    <p v-if="complete" role="status" class="mt-5 text-sm text-emerald-900">{{ t('auth.passwordResetSent') }}</p>
    <form v-else-if="verified" class="mt-6 space-y-5" @submit.prevent="submit">
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.newPassword') }}<input v-model="newPassword" required minlength="8" type="password" autocomplete="new-password" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.confirmPassword') }}<input v-model="confirmation" required minlength="8" type="password" autocomplete="new-password" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <button type="submit" :disabled="pending" class="w-full rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-50">{{ pending ? t('common.loading') : t('auth.resetPassword') }}</button>
    </form>
    <p v-else-if="errorMessage" role="alert" class="mt-5 text-sm text-red-700">{{ errorMessage }}</p>
    <NuxtLink :to="localePath('/auth/login')" class="mt-5 block text-center text-sm font-medium text-emerald-800 underline">{{ t('auth.signIn') }}</NuxtLink>
  </section>
</template>
