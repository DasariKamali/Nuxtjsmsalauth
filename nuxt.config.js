export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/msal.js', mode: 'client' },
  ],
})
