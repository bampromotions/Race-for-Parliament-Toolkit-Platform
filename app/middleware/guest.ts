export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return

  const firebase = useFirebase()
  if (!firebase.configured) return

  await firebase.ready
  if (firebase.session.value) {
    const path = firebase.session.value.isAdmin ? '/admin' : '/dashboard'
    return navigateTo(useLocalePath()(path))
  }
})
