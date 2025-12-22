import GoogleSignInPlugin from 'vue3-google-signin'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleSignInPlugin, {
    clientId: useRuntimeConfig().public.googleClientId
  })
})
