const merge = require("webpack-merge");
const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = merge({
  entry: {
    index: path.join(__dirname, "../src/index.js"),
  },
  output: {
    path: path.join(__dirname, "../docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
  devServer: {
    port: 4444,
    hot: true,
    compress: true,
  },
});

module.exports = config;
