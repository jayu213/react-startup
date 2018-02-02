const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [{
  exclude: /node_modules/,
  loader: 'babel-loader'
}, {
  test: /\.html$/,
  loader: 'html-loader'
},{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader!sass-loader",
  }),
} ]