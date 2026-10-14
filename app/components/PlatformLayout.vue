<script setup lang="ts">
import { courseId } from '../data/course'

const props = defineProps<{ area: 'participant' | 'staff' }>()
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const firebase = useFirebase()
const auth = useAuth()
const mobileOpen = ref(false)
const signOutError = ref('')
const clientReady = ref(false)

onMounted(() => {
  clientReady.value = true
})

const navigation = computed(() => {
  if (props.area === 'staff') {
    const role = firebase.session.value?.role
    if (role === 'contentEditor') {
      return [{ label: 'navigation.quizzes', path: '/admin/quizzes' }]
    }
    if (role === 'marker') {
      return [{ label: 'navigation.marking', path: '/marking' }]
    }
    return [
      { label: 'navigation.dashboard', path: '/admin' },
      { label: 'navigation.participants', path: '/admin/participants' },
      { label: 'navigation.courses', path: '/admin/courses' },
      { label: 'navigation.modules', path: '/admin/modules' },
      { label: 'navigation.quizzes', path: '/admin/quizzes' },
      { label: 'navigation.results', path: '/admin/results' },
      { label: 'navigation.marking', path: '/marking' },
    ]
  }
  return [
      { label: 'navigation.dashboard', path: '/dashboard' },
      { label: 'navigation.course', path: '/course' },
      { label: 'navigation.progress', path: '/progress' },
      { label: 'navigation.quizzes', path: `/course/${courseId}/module/1/quiz` },
      { label: 'navigation.profile', path: '/profile' },
    ]
})

function isActive(path: string) {
  const localizedPath = localePath(path)
  return route.path === localizedPath || route.path.startsWith(`${localizedPath}/`)
}

async function handleSignOut() {
  signOutError.value = ''
  try {
    await auth.signOut()
    await navigateTo(localePath('/'))
  } catch (error) {
    signOutError.value = error instanceof Error ? error.message : t('common.unexpectedError')
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 lg:flex">
    <aside class="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <NuxtLink :to="localePath('/')" class="border-b border-slate-100 px-6 py-5">
        <span class="block text-sm font-bold tracking-tight text-slate-950">{{ t('brand.name') }}</span>
        <span class="mt-1 block text-xs text-slate-500">{{ props.area === 'staff' ? t('navigation.admin') : t('brand.tagline') }}</span>
      </NuxtLink>
      <nav :aria-label="props.area === 'staff' ? t('navigation.admin') : t('navigation.dashboard')" class="flex-1 space-y-1 p-3">
        <NuxtLink
          v-for="item in navigation"
          :key="item.path"
          :to="localePath(item.path)"
          class="block rounded-lg px-3 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          :class="isActive(item.path)
            ? 'bg-emerald-50 text-emerald-900'
            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'"
          :aria-current="isActive(item.path) ? 'page' : undefined"
        >
          {{ t(item.label) }}
        </NuxtLink>
      </nav>
      <div class="border-t border-slate-100 p-4">
        <p v-if="clientReady" class="truncate text-sm font-semibold">{{ firebase.session.value?.displayName || firebase.session.value?.email }}</p>
        <p v-if="signOutError" role="alert" class="mt-2 text-xs text-red-700">{{ signOutError }}</p>
        <button class="mt-3 text-sm font-medium text-slate-600 hover:text-slate-950" @click="handleSignOut">
          {{ t('navigation.signOut') }}
        </button>
      </div>
    </aside>

    <div class="min-w-0 flex-1">
      <header class="sticky top-0 z-20 flex min-h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div class="flex items-center gap-3">
          <button
            class="rounded-md border border-slate-300 p-2 text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:hidden"
            :aria-label="mobileOpen ? t('navigation.closeMenu') : t('navigation.openMenu')"
            :aria-expanded="mobileOpen"
            @click="mobileOpen = !mobileOpen"
          >
            <UIcon :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="size-5" />
          </button>
          <span class="text-sm font-semibold text-slate-800 lg:hidden">{{ t('brand.name') }}</span>
        </div>
        <LanguageSwitcher />
      </header>

      <nav v-if="mobileOpen" class="space-y-1 border-b border-slate-200 bg-white p-3 lg:hidden" :aria-label="t('navigation.dashboard')">
        <NuxtLink
          v-for="item in navigation"
          :key="item.path"
          :to="localePath(item.path)"
          class="block rounded-lg px-3 py-2.5 text-sm font-medium"
          :class="isActive(item.path) ? 'bg-emerald-50 text-emerald-900' : 'text-slate-700 hover:bg-slate-50'"
          @click="mobileOpen = false"
        >
          {{ t(item.label) }}
        </NuxtLink>
        <button class="w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50" @click="handleSignOut">
          {{ t('navigation.signOut') }}
        </button>
        <p v-if="signOutError" role="alert" class="px-3 py-2 text-sm text-red-700">{{ signOutError }}</p>
      </nav>

      <main class="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
