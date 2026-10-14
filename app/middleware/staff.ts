import type { UserRole } from '../types/firebase'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const firebase = useFirebase()
  if (!firebase.configured) {
    return navigateTo(useLocalePath()('/auth/login'), { replace: true })
  }

  await firebase.ready
  if (firebase.error.value) {
    throw createError({
      statusCode: 503,
      statusMessage: `Unable to verify staff access: ${firebase.error.value}`,
    })
  }

  if (!firebase.session.value) {
    return navigateTo(useLocalePath()('/auth/login'), { replace: true })
  }

  const allowedRoles = (to.meta.staffRoles as UserRole[] | undefined) ?? ['admin']
  if (!allowedRoles.includes(firebase.session.value.role)) {
    return navigateTo(useLocalePath()('/dashboard'), { replace: true })
  }
})
