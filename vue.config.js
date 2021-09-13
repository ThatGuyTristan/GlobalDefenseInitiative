module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://identitytoolkit.googleapis.com/v1/",
  },
};
