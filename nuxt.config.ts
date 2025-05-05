import colors from 'vuetify/es5/util/colors'
import redirectSSL from 'redirect-ssl'
import dotenv from '@nuxtjs/dotenv'
import axios from 'axios'

const environment = process.env.NODE_ENV;

export default {
  target: 'static',
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + `vagivagi blog`,
    title: 'vagivagi blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Software Engineer Blog for memo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    'material-design-icons-iconfont/dist/material-design-icons.css'
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
    '@nuxtjs/dotenv',
    // TODO '@nuxtjs/eslint-module',
    '@nuxtjs/markdownit',
    "@nuxtjs/vuetify",
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_TRACKING_ID
    }],
    ['@nuxtjs/google-adsense', {
      id: process.env.GA_ADSENSE_ID,
      analyticsUacct: process.env.GA_TRACKING_ID,
      analyticsDomainName: 'vagivagi.com'
    }]
  ],
  buildModules: ["@nuxt/typescript-build"],
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    }),
  ],
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
    },
    font: {
      family: 'Roboto'
    },
    defaultAssets: true,
    icons: {
      iconfont: 'md'
    }
  },
  /*
  ** markdown render 
  */
  markdownit: {
    linkify: true,
    html: true,
    typegraphy: true,
    injected: true,
    use: [
      'markdown-it-meta',
      'markdown-it-highlightjs',
      ['markdown-it-table-of-contents', {
        includeLevel: [1, 2, 3],
        listType: "ol"
      }],
      'markdown-it-anchor',
      ['markdown-it-link-attributes', {
        // matcher: trueを返すリンクにattrsオプションを付与する
        matcher (href, _config) {
          return /^(?!\/)/.test(href)
        },
        attrs: {
          target: '_blank',
          rel: 'noreferrer'
        }
      }]
    ]
  },
  generate: {
    routes() {
      const baseUrl = process.env.API_BASE_URL || "http://localhost:8080";

      // Entry のルートを取得
      const entryPromise = axios.get(`${baseUrl}/entries`).then((res) =>
        res.data.map((entry) => `entries/${entry.entryId}`)
      );

      // Tags のルートを取得
      const tagsPromise = axios.get(`${baseUrl}/tags`).then((res) =>
        res.data.map((tags) => `/tags`)
      );

      // Entries のルートを取得
      const entriesPromise = axios.get(`${baseUrl}/entries`).then((res) =>
        res.data.map((entry) => `entries`)
      );

      // 全てのルートを結合
      return Promise.all([entryPromise, tagsPromise]).then(
        (routes) => routes.flat()
      );
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    loaders: {
      css: {
        // 不要なオプションを削除
        modules: {
          // 'compileType' を削除
          localIdentName: '[local]_[hash:base64:5]'
        }
      }
    },
    typescript: {
      typeCheck: false
    },
  }
}
