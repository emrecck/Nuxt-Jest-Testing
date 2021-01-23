export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hasanbey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,400;0,500;0,600;0,700;0,900;1,300&display=swap" }
    ]
  },
  script: [
    { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js' },
  ],
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
