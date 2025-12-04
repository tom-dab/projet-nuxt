// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      serviceKey: process.env.NUXT_PUBLIC_SERVICE_KEY,
      templateKey: process.env.NUXT_PUBLIC_TEMPLATE_KEY,
      publicKey: process.env.NUXT_PUBLIC_PUBLIC_KEY,
    },
  },
});