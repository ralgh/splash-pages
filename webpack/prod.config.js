// Webpack config for creating the production bundle.

require('babel/register');

var path = require('path');
var webpack = require('webpack');
var writeStats = require('./utils/write-stats');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var strip = require('strip-loader');

var assetsPath = path.join(__dirname, './public/images');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: './app/client/bootstrap.js',
  },
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel'] },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
    ],
  },
  progress: true,
  plugins: [

    // css files from the extract-text-plugin loader
    new ExtractTextPlugin('[name]-[chunkhash].css'),

    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),

        // used to know we are on browser
        NODE_ENV: JSON.stringify('production'),

      },
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
        },
    }),

    // stats
    function() { this.plugin('done', writeStats); },

  ],
};
