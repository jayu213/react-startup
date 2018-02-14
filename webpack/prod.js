import path from 'path';
import loaders from './loaders'
import plugins from './prod-plugins'
import alias from './alias'
import pack from '../package.json'
const sourcePath = path.join(__dirname, '../src');

export default {
    entry: {
        app: path.resolve(sourcePath, 'index.js'),
        vendor: Object.keys(pack.dependencies)
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