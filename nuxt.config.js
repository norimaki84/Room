import path from 'path';
import fs from 'fs';

export default {
  mode: 'spa', // 'universal' or 'spa'
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rooo Lou EXHIBITION「Room」',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '3D空間、AR技術を取り入れたRooo Lou Exhibiton「Room」' },
      { hid: 'keywords', name: 'keywords', content: 'RoooLou, Rooo, ルー, ルーイラスト, arexhibition, ルー個展' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'Rooo Lou Exhibiton「Room」'},
      { hid: 'og:title', property: 'og:title', content: 'Rooo Lou Exhibiton「Room」'},
      { hid: 'og:description', property: 'og:description', content: '3D空間、AR技術を取り入れたRooo Lou Exhibiton「Room」'},
      { hid: 'og:url', property: 'og:url', content: 'http://exh-room.com/'},
      { hid: 'og:image', property: 'og:image', content: 'http://exh-room.com/og.png'},
      { hid: 'og:type', property: 'og:type', content: 'website'},

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Rooo Lou Exhibiton「Room」'},
      { hid: 'twitter:description', name: 'twitter:description', content: '3D空間、AR技術を取り入れたRooo Lou Exhibiton「Room」'},
      { hid: 'twitter:image', name: 'twitter:image', content: 'http://exh-room.com/og.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.js', type:"module" },
      { src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js', type:"nomodule" },
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
    { src: '~/plugins/camera-controls.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // TODO:本番公開前にオンにする
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-165424285-1'
    // }]
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
    '@nuxtjs/dotenv',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ],
    'nuxt-svg-loader',
    'nuxt-user-agent',
  ],
  manifest: {
    name: "Rooo Lou Exhibition「Room」",
    lang: 'ja-jp',
    short_name: 'Room',
    title: 'Rooo Lou Exhibition「Room」',
    'og:title': 'Rooo Lou Exhibition「Room」',
    description: 'Rooo Lou Exhibition「Room」',
    'og:description': 'Rooo Lou Exhibition「Room」',
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
  },
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(
          __dirname,
          'server/localserver-key.pem'
        )
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, 'server/localserver.pem')
      )
    }
  },
  workbox: {
    importScripts: ['main-sw.js']
  }
}
