const path = require('path');
const sourcePath = path.join(__dirname, '../src');

module.exports = {
        entry:{
          app:path.resolve(sourcePath, 'index.js') 
        } ,
        output: {
          path: path.join(__dirname, '../dist'),
          publicPath: '/',
          filename: 'bundle.js'
        },
        module: {
          loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
          }]
        },
        resolve: {
          extensions: ['.js', '.jsx']
        },
        devServer: {
          historyApiFallback: {
            index: path.join(__dirname, "../index.html")
          },
          contentBase: [path.join(__dirname, "../")],
          publicPath: path.join(__dirname, "../")
        }
      };