// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'https://devtwit8.ru/api/v1/page/?path='
    }
  },
  devtools: { enabled: true },
  css: ['@/assets/main.scss'],
  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Montserrat: [300, 400, 800],
        }
    }],
  ],
})

