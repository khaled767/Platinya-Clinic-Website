const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },

  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  optimization: {
    moduleIds: "deterministic",

    runtimeChunk: "single",

    splitChunks: {
      chunks: "all",

      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -10,
        },

        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  stats: "normal",
});