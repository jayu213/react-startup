var webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
