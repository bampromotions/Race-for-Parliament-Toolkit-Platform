export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const firebase = useFirebase()
  if (!firebase.configured) {
    return navigateTo({
      path: useLocalePath()('/auth/login'),
      query: { redirect: to.fullPath, setup: 'firebase' },
    })
  }

  await firebase.ready

  if (firebase.error.value) {
    throw createError({
      statusCode: 503,
      statusMessage: `Unable to verify authentication: ${firebase.error.value}`,
    })
  }

  if (!firebase.session.value) {
    return navigateTo({
      path: useLocalePath()('/auth/login'),
      query: { redirect: to.fullPath },
    })
  }
})
