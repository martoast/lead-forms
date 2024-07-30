// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  plugins: [
    '~/plugins/formatCurrency'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['mapbox-search-box'].includes(tag),
    },
  },
  runtimeConfig: {
    ZILLOW_API_KEY: process.env.ZILLOW_API_KEY,
    REAL_ESTATE_API_KEY: process.env.REAL_ESTATE_API_KEY,
    public: {
        MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
}
})
