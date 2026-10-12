export function useFirebaseApi() {
  const firebase = useFirebase()

  async function request<T>(
    url: string,
    options: { method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; body?: Record<string, unknown> } = {},
  ) {
    const { auth } = firebase.requireFirebase()
    const user = auth.currentUser
    if (!user) throw new Error('You must be signed in to access this information.')

    const token = await user.getIdToken()
    const headers = new Headers()
    headers.set('Authorization', `Bearer ${token}`)
    return $fetch<T>(url, {
      ...options,
      headers,
    })
  }

  return { request }
}
