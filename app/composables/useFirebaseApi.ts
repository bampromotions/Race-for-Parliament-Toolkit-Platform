import { $fetch } from 'ofetch'
import type { FetchOptions } from 'ofetch'

type FirebaseApiRequestOptions = FetchOptions<'json'>

export function useFirebaseApi() {
  const { requireFirebase } = useFirebase()

  async function request<T>(url: string, options: FirebaseApiRequestOptions = {}): Promise<T> {
    const { auth } = requireFirebase()
    const user = auth.currentUser
    if (!user) {
      throw new Error('You must be signed in to make this request.')
    }

    const token = await user.getIdToken()
    const headers = new Headers(options.headers)
    headers.set('Authorization', 'Bearer ' + token)

    return $fetch<T>(url, {
      ...options,
      headers,
    })
  }

  return { request }
}
