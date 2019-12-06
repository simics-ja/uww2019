const BASE_URL_SUFFIX = '/uww2019'
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: BASE_URL
  },
  router: {
    base: BASE_URL_SUFFIX
  },
  head: {
    title: 'Ubiquitous Wearable Workshop 2019',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/websaite#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ユビキタス・ウェアラブル技術に関するワークショップ「UWW2019」を12月20日（金）-21日（土） @淡路島にて開催いたします！' },
      // ogp settings
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ubiquitous Wearable Workshop 2019' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: BASE_URL + BASE_URL_SUFFIX + '/' },
      { hid: 'og:title', property: 'og:title', content: 'Ubiquitous Wearable Workshop 2019' },
      { hid: 'og:description', property: 'og:description', content: 'ユビキタス・ウェアラブル技術に関するワークショップ「UWW2019」を12月20日（金）-21日（土） @淡路島にて開催いたします！' },
      { hid: 'og:image', property: 'og:image', content: BASE_URL + BASE_URL_SUFFIX + '/ogp-common.jpg' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      // facebook ogp settings
      { hid: 'fb:app_id', property: 'fb:app_id', content: '503287080465103' },
      { hid: 'article:publisher', property: 'article:publisher', content: 'https://www.facebook.com/tsukalab/' },
      // twitter ogp settings
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@tsukalab' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: BASE_URL_SUFFIX + '/favicon.ico?ver=1.01' },
      { rel: 'apple-touch-icon', type: 'image/png', href: BASE_URL_SUFFIX + '/apple-touch-icon-180x180.png?ver=1.01' }
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
  plugins: [{
    src: '~plugins/vue-scrollmagic.js',
    ssr: false
  }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
   ** style-resources
   */
  styleResources: {
    scss: [
      '~/assets/styles/scss/custom.scss' // 読みませたいscssファイルを指定します。
    ]
  },
  /*
   ** FontAwesome
   */
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  }
}
