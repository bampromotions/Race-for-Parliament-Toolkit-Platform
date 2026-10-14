export default defineNuxtRouteMiddleware(async () => {
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

  if (firebase.session.value.role !== 'admin') {
    return navigateTo(useLocalePath()('/dashboard'), { replace: true })
  }
})
