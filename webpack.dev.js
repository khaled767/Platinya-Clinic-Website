const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: true,
    },

    compress: true,

    port: 3000,

    open: true,

    hot: true,

    liveReload: true,

    historyApiFallback: true,

    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "info",
      progress: true,
    },

    watchFiles: [
      "src/**/*",
    ],
  },

  stats: "minimal",

  infrastructureLogging: {
    level: "warn",
  },
});