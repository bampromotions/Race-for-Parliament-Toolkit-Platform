export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/devtools'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-LS', // English (Lesotho/South Africa)
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'st',
        iso: 'st-LS', // Sesotho
        file: 'st.json',
        name: 'Sesotho',
      },
    ],
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: 'AIzaSyBuQeKD0Emv9yJ4i9yg8p0hP7gfVd7Axyk',
      firebaseAuthDomain: 'raceforpalament-39d8d.firebaseapp.com',
      firebaseProjectId: 'raceforpalament-39d8d',
      firebaseAppId: '1:345001195126:web:1e23a4309e7959fd02d157',
      firebaseStorageBucket: 'raceforpalament-39d8d.firebasestorage.app',
      firebaseMessagingSenderId: '345001195126',
      firebaseMeasurementId: 'G-KZSP7LS7EX',
    },
  },
  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },

  app: {
    head: {
      title: 'Race for Parliament Toolkit',
      meta: [
        {
          name: 'description',
          content: 'A bilingual civic learning platform for parliament, democracy and public participation.',
        },
      ],
    },
  },
})
