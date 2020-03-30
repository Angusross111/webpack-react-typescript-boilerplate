const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        historyApiFallback: {
            index: 'index.html',
            rewrites: [
                { from: /.+\/module.bundle.js$/, to: '/dist/module.bundle.js' }
            ]
        }
    }
});