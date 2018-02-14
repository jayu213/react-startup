import ExtractTextPlugin from 'extract-text-webpack-plugin'
export default [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: ['babel-loader', 'eslint-loader']
}, {
  test: /\.html$/,
  loader: 'html-loader'
}, {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader!sass-loader",
  }),
}]