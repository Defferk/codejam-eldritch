const { triggerAsyncId } = require('async_hooks');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const path = require('path');

let mode_p;
(process.env.NODE_ENV === 'production' ? mode_p = 'production' : mode_p = 'development')

module.exports = {
  mode: mode_p, 
  entry: path.resolve(__dirname,'src','index.js'),
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'src','index.html'),
        inject: 'body',
        // publicPath: 'dist',
        // minify: false
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css'
    }),
    ],
  module: {
    rules: [
        {
        test: /\.html$/i,
        loader: "html-loader",
        },
        {
        test: /\.css$/i,
        use: [
          mode_p === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
           'css-loader'
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          type: "asset",
        },
      // {
      //   test: /.s?css$/,
      //   use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      // },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    },
};