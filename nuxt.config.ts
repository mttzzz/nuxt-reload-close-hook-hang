export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  // Change this value while `nuxt dev` is running to trigger a reload.
  runtimeConfig: { public: { marker: 'one' } },
})
