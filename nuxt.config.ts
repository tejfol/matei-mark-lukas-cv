// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // SSG: static output for Cloudflare Pages (or any static host)
  nitro: {
    preset: 'static'
  },

  fonts: {
    families: [
      { name: 'JetBrains Mono', provider: 'google' }
    ]
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@i2d/nuxt-pdf-frame',
    '@nuxtjs/tailwindcss'
  ]
})