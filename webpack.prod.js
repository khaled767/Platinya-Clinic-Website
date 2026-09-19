const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common(true), {
  mode: "production",

  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "./", // relative paths so the site works under a GitHub Pages subpath
    clean: true,
  },

  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  plugins: [
    // Emit the stylesheet as its own file at the site root, so the <link> resolves
    // identically on "/" and on pre-rendered sub-pages ("/hair/") and any future
    // url() inside the CSS keeps resolving to ./assets/...
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
    }),
  ],

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