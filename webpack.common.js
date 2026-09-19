const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// `isProd` decides how CSS ships:
//   dev  -> style-loader (CSS injected by JS, HMR-friendly)
//   prod -> MiniCssExtractPlugin (a real .css file linked in <head>)
// Without the prod branch the whole stylesheet travelled inside the JS bundle,
// so the pre-rendered HTML painted unstyled (flash of unstyled content).
module.exports = (isProd = false) => ({
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "./", // relative paths so the site works under a GitHub Pages subpath
    assetModuleFilename: "assets/[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
  test: /\.(js|mjs)$/i,
  exclude: /node_modules/,
  type: "javascript/auto",
  use: {
    loader: "babel-loader",
  },
},
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets",
          noErrorOnMissing: true,
        },
        {
          // SEO files served from the site root: /sitemap.xml, /robots.txt
          from: "src/static",
          to: ".",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],

  resolve: {
    extensions: [".js"],
  },
});
