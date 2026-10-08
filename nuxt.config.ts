export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },

  app: {
    head: {
      title: 'Quizly — Assessment workspace',
      meta: [
        {
          name: 'description',
          content:
            'A focused workspace for building, delivering, and understanding assessments.',
        },
      ],
    },
  },
})
