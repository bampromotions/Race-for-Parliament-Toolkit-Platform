import type { FirebaseClient } from '../app/types/firebase'

declare module '#app' {
  interface NuxtApp {
    $firebase: FirebaseClient
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $firebase: FirebaseClient
  }
}

export {}
