module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        components: "@/components",
        static: "@/static",
        common: "@/common",
        pages: "@/pages",
        api: "@/api",
      },
    },
  },
};
