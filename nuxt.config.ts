// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-simple-sitemap',
    'nuxt-microcms-module',
  ],
  site: {
    url: 'https://example.com',
  },
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ]
  },
})
