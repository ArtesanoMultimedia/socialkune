export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'socialkune',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { meta: 'google-signin-client_id', content: '36734899625-cpeqvega7k86j6c71pumgkp99igegs3o.apps.googleusercontent.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css', integrity: 'sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/grd3eab.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }
    ],
    script: [
      { src: 'https://unpkg.com/feather-icons', body: true },
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js', integrity: 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj', crossorigin: 'anonymous', body: true },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns', crossorigin: 'anonymous', body: true },
      { src: 'https://unpkg.com/aos@next/dist/aos.js', body: true },
      { src: '/js/script.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/components'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  http: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
