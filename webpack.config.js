const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs/build'),
    publicPath: '/build/',
  },
  devtool: 'source-map',
  module: {
    noParse: /node_modules\/glitch-canvas\/dist\/glitch-canvas\.js/,
    loaders: [
      {
        include: path.resolve(__dirname, 'src/js'),
        loader: 'eslint-loader',
        test: /\.js$/,
      },
    ],
    loaders: [
      {
        include: path.resolve(__dirname, 'src/js'),
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: ['ts', '.js'],
  },
};
