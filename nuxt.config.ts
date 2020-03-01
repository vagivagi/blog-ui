import colors from 'vuetify/es5/util/colors'
const environment = process.env.NODE_ENV || 'development';
const envSet = require(`./config/env.${environment}.js`)

export default {
  mode: 'universal',
  env: envSet,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + `vagivagi blog`,
    title: 'vagivagi blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ], 
    script: [
      { src: '~plugins/gtag.js', mode: 'client' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/prism.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // TODO '@nuxtjs/eslint-module',
    '@nuxtjs/markdownit',
    "@nuxtjs/vuetify"
  ],
  buildModules: ["@nuxt/typescript-build"],
  serverMiddleware: ['redirect-ssl'],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: { 
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** markdown render 
  */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true,
    typegraphy: true,
    injected: true,
    langPrefix: 'lang-',
    use: [
      'markdown-it-meta',
      'markdown-it-highlightjs',
      'markdown-it-table-of-contents'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    loaders: {
      // we want to use sass instead of node-sass
      options: {
        implementation: require('sass'),
        fiber: require('fibers'),
      }
    },
    typescript: {
      // this is required - if set to true the HMR in dev will time out
      typeCheck: false
    },
    buildModules: ['@nuxt/typescript-build']
  }
}
