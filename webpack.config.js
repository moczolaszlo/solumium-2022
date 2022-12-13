const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = ['index', 'rolunk', 'termekeink', 'tudomanyos-hatter', 'products', 'about-us', 'scientific-background'];
const entry = {};

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'static/styles/[name].[contenthash].css',
  }),
  new CleanWebpackPlugin(),
];

pages.forEach((name) => {
  entry[name] = path.join(__dirname, './src/pages', name + '.tsx');
  plugins.push(
  new HtmlWebpackPlugin({
    chunks: [name],
    inject: 'body',
    filename: name === 'index' ? 'index.html' : name + '/index.html',
    template: path.join(__dirname, 'src', 'index.html')
  }));
})

module.exports = {
  mode: 'production',
  devtool: false,
  entry,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(pdf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/docs/[name].[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins,
  output: {
    filename: 'static/javascripts/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'solumium',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    runtimeChunk: 'single',
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};