const path = require('path');

export default {
  mode: 'spa', // 'universal' or 'spa'
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  styleResources: {
    scss: [
      '@/assets/style/utilities/_mixin.scss',
      '@/assets/style/utilities/_utils.scss',
    ]
  },
  css: [
    '@/assets/style/modules/_normalize.scss',
    '@/assets/style/utilities/_font.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/camera-controls.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  manifest: {
    name: "RoooLoom",
    lang: 'ja-jp',
    short_name: 'RoooLoom',
    title: 'RoooLoom',
    'og:title': 'RoooLoom',
    description: 'RoooLoom',
    'og:description': 'RoooLoom',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    crossorigin: 'use-credentials'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (!!config.module) {
        config.module.rules.push({ test: /\.(vert|frag)$/i, use: ["raw-loader"] });
      }
    },
    transpile: [
      "three"
    ]
  },
  generate: {
    // fallback: true,
    devtools: true,
    // サーバーへのコールが溢れないようにインターバルを設定
    interval: 200,
    // routes: [
    //   '/',
      // '/about',
      // '/contact',
      // '404'
    // ],
    // generateするディレクトリをhtdocsに変更
    dir: "htdocs"
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
    },
  }
}
