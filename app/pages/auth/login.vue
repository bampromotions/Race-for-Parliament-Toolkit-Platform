<script setup lang="ts">
definePageMeta({ layout: 'auth', middleware: 'guest' })

const { t } = useI18n()
const route = useRoute()
const firebase = useFirebase()
const auth = useAuth()
const email = ref('')
const password = ref('')
const pending = ref(false)
const errorMessage = ref('')
const localePath = useLocalePath()

useSeoMeta({ title: () => `${t('auth.welcome')} · ${t('brand.name')}` })

function safeRedirect(value: unknown) {
  return typeof value === 'string'
    && value.startsWith('/')
    && !value.startsWith('//')
    && !value.includes('\\')
    ? value
    : ''
}

async function submit() {
  errorMessage.value = ''
  pending.value = true
  try {
    const role = await auth.signIn(email.value, password.value)
    const rolePath = role === 'admin' ? '/admin' : '/dashboard'
    const target = role === 'participant'
      ? safeRedirect(route.query.redirect) || localePath(rolePath)
      : localePath(rolePath)
    await navigateTo(target, { replace: true })
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
    <h1 class="mt-3 text-2xl font-bold tracking-tight text-slate-950">{{ t('auth.welcome') }}</h1>
    <p class="mt-2 text-sm text-slate-600">{{ t('auth.noAccount') }} <NuxtLink :to="localePath('/auth/register')" class="font-semibold text-emerald-800 underline">{{ t('auth.register') }}</NuxtLink></p>

    <UAlert v-if="!firebase.configured" class="mt-6" color="warning" variant="subtle" :description="t('common.notConfigured')" />
    <form class="mt-6 space-y-5" @submit.prevent="submit">
      <label class="block text-sm font-medium text-slate-700">
        {{ t('auth.email') }}
        <input v-model="email" type="email" autocomplete="email" required class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20">
      </label>
      <label class="block text-sm font-medium text-slate-700">
        {{ t('auth.password') }}
        <input v-model="password" type="password" autocomplete="current-password" required class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 shadow-sm outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20">
      </label>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <button type="submit" :disabled="pending || !firebase.configured" class="w-full rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-50">
        {{ pending ? t('common.loading') : t('auth.signIn') }}
      </button>
      <NuxtLink :to="localePath('/auth/forgot-password')" class="block text-center text-sm font-medium text-emerald-800 underline">{{ t('auth.forgotPassword') }}</NuxtLink>
    </form>
  </section>
</template>
