
export default {
  mode: 'universal',
  srcDir: 'src/',   // 追加
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
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /* <head>で読み込むファイルを指定 */
  css: [
    './src/assets/sass/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /* モジュール */
  modules: [
    ['bootstrap-vue/nuxt', {css: false}]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // docker用
  // server: {
  //   port: process.env.PORT || 3000,
  //   host: '0.0.0.0',
  //   timing: false
  // }
}
