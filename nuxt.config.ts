export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxt/image', '@pinia/nuxt'],
  experimental: {
    viewTransition: true,
  },
  colorMode: {
    preference: 'light',
  },
  runtimeConfig: {
    // Firebase ENV
    public: {
      apiKey: 'AIzaSyDd9Wye_7_fcGHm66FXInOvT4RaxhC4n58',
      authDomain: 'veristream-ch.firebaseapp.com',
      projectId: 'veristream-ch',
      storageBucket: 'veristream-ch.appspot.com',
      messagingSenderId: '648787290392',
      appId: '1:648787290392:web:b722710f51df12ee31166d',
    },
  },
  ssr: false,
})
