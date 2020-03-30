const webpack = require('webpack');
const merge = require('webpack-merge');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    // optimization: {
    //     minimizer: [new UglifyJsPlugin()],
    // },
});