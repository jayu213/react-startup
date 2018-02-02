const path = require('path');
const sourcePath = path.join(__dirname, '../src');
const loaders = require('./loaders')
const plugins = require('./prod-plugins')
const alias = require('./alias')
const package = require('../package.json');

module.exports = {
    entry: {
        app: path.resolve(sourcePath, 'index.js'),
        vendor: Object.keys(package.dependencies)
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
    plugins,
    devtool: 'cheap-module-source-map',
};