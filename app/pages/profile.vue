<script setup lang="ts">
import { createProfileRepository, type ParticipantProfile } from '../repositories/profileRepository'

definePageMeta({ layout: 'participant', middleware: 'auth' })
const { t, locale } = useI18n()
const firebase = useFirebase()
const pending = ref(true)
const saving = ref(false)
const errorMessage = ref('')
const saved = ref(false)
const form = reactive({
  displayName: '',
  email: '',
  organisation: '',
  phone: '',
  preferredLanguage: 'en' as 'en' | 'st',
})

useSeoMeta({ title: () => `${t('profile.title')} · ${t('brand.name')}` })

onMounted(async () => {
  try {
    const session = firebase.session.value
    const { db, auth } = firebase.requireFirebase()
    if (!session) throw new Error('Your session has expired. Sign in again.')

    const repository = createProfileRepository(db, session.uid, auth.currentUser)
    const profile = await repository.get()
    if (!profile) throw new Error('Participant profile could not be found.')
    Object.assign(form, profile)
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('common.unexpectedError')
  } finally {
    pending.value = false
  }
})

async function save() {
  saving.value = true
  errorMessage.value = ''
  saved.value = false
  try {
    const session = firebase.session.value
    const { db, auth } = firebase.requireFirebase()
    if (!session) throw new Error('Your session has expired. Sign in again.')
    const repository = createProfileRepository(db, session.uid, auth.currentUser)
    const updatedProfile: Pick<ParticipantProfile, 'displayName' | 'organisation' | 'phone' | 'preferredLanguage'> = {
      displayName: form.displayName.trim(),
      organisation: form.organisation.trim(),
      phone: form.phone.trim(),
      preferredLanguage: form.preferredLanguage,
    }
    await repository.update(updatedProfile)
    saved.value = true
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : t('profile.saveError')
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <section class="max-w-2xl space-y-6">
    <header>
      <h1 class="text-3xl font-bold tracking-tight text-slate-950">{{ t('profile.title') }}</h1>
      <p class="mt-2 text-slate-600">{{ t('navigation.profile') }}</p>
    </header>
    <p v-if="pending" role="status" class="text-sm text-slate-600">{{ t('common.loading') }}</p>
    <form v-else class="space-y-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6" @submit.prevent="save">
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.fullName') }}<input v-model="form.displayName" required autocomplete="name" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.email') }}<input v-model="form.email" disabled type="email" autocomplete="email" class="mt-1.5 block w-full rounded-md border border-slate-200 bg-slate-100 px-3 py-2.5 text-slate-500"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('auth.organisation') }}<input v-model="form.organisation" autocomplete="organization" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">{{ t('profile.phone') }}<input v-model="form.phone" autocomplete="tel" type="tel" class="mt-1.5 block w-full rounded-md border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"></label>
      <label class="block text-sm font-medium text-slate-700">
        {{ t('auth.preferredLanguage') }}
        <select v-model="form.preferredLanguage" class="mt-1.5 block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20">
          <option value="en">{{ t('common.english') }}</option>
          <option value="st">{{ t('common.sesotho') }}</option>
        </select>
      </label>
      <p v-if="saved" role="status" class="text-sm text-emerald-800">{{ t('profile.saved') }}</p>
      <p v-if="errorMessage" role="alert" class="text-sm text-red-700">{{ errorMessage }}</p>
      <button type="submit" :disabled="saving" class="rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 disabled:opacity-50">{{ saving ? t('common.loading') : t('common.save') }}</button>
    </form>
  </section>
</template>
