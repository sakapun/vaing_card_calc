module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Blueprint Simulator for Vainglory",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Blueprint Simulator for Vainglory" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    }
  },
  css: [
    "@fortawesome/fontawesome-free-webfonts/css/fontawesome.css",
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
  modules: [
    "@nuxtjs/bulma",
    ["@nuxtjs/google-tag-manager", { id: "GTM-N6SSH39" }]
  ],
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false }
  ]
};
