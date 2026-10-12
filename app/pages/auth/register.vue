<script setup lang="ts">
definePageMeta({ layout: 'auth', middleware: 'guest' })

const { t, locale } = useI18n()
const localePath = useLocalePath()
const firebase = useFirebase()
const auth = useAuth()
const form = reactive({ name: '', email: '', password: '', organisation: '' })
const pending = ref(false)
const errorMessage = ref('')

useSeoMeta({ title: () => `${t('auth.createAccount')} · ${t('brand.name')}` })

async function submit() {
  errorMessage.value = ''
  pending.value = true
  try {
    await auth.register({
      ...form,
      preferredLanguage: locale.value === 'st' ? 'st' : 'en',
    })
    await navigateTo(localePath('/dashboard'), { replace: true })
  } catch {
    errorMessage.value = t('auth.authError')
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section class="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
    <p class="text-sm font-semibold uppercase tracking-wide text-emerald-800">{{ t('brand.name') }}</p>
    <h1 class="mt-3 text-2xl font-bold tracking-tight text-slate-950">{{ t('auth.createAccount') }}</h1>
    <p class="mt-2 text-sm text-slate-600">{{ t('auth.hasAccount') }} <NuxtLink :to="localePath('/auth/login')" class="font-semibold text-emerald-800 underline">{{ t('auth.signIn') }}</NuxtLink></p>
    <UAlert v-if="!firebase.configured" class="mt-6" color="warning" variant="subtle" :description="t('common.notConfigured')" />
    <form class="mt-6 space-y-4" @submit.prevent="submit">
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.fullName') }}<input v-model="form.name" required autocomplete="name" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.email') }}<input v-model="form.email" required type="email" autocomplete="email" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.password') }}<input v-model="form.password" required type="password" minlength="8" autocomplete="new-password" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.organisation') }}<input v-model="form.organisation" autocomplete="organization" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <button type="submit" :disabled="pending || !firebase.configured" class="w-full rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-50">{{ pending ? t('common.loading') : t('auth.register') }}</button>
    </form>
  </section>
</template>
