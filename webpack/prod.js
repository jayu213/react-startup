const path = require('path');
const sourcePath = path.join(__dirname, '../src');
const loaders = require('./loaders')
const plugins = require('./prod-plugins')
const alias = require('./alias')

module.exports = {
    entry: {
        app: path.resolve(sourcePath, 'index.js'),
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    module: { loaders },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias
    },
    plugins
};