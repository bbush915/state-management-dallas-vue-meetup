module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/_variables.scss";'
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule("graphql")
      .test(/\.(graphql|gql)$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  }
};
