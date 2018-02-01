const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  })
]