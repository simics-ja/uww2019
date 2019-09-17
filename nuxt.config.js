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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '神戸大学塚本・寺田研究室およびNPO法人ウェアラブルコンピュータ研究開発機構では、ユビキタス・ウェアラブルワークショップを2007年以来毎年開催し、ユビキタス・ウェアラブル技術に関する密度の濃い発表と議論を行っています。' }
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
    component: 'fa'
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
