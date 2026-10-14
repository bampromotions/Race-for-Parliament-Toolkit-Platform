export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return

  const firebase = useFirebase()
  if (!firebase.configured) return

  await firebase.ready
  if (firebase.session.value) {
    const { role } = firebase.session.value
    const path = role === 'admin'
      ? '/admin'
      : role === 'contentEditor'
        ? '/admin/quizzes'
        : role === 'marker'
          ? '/marking'
          : '/dashboard'
    return navigateTo(useLocalePath()(path))
  }
})
