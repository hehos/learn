var webpack = require('webpack')

module.exports = {
    entry: {
        bundle: './entry.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('这个文件由张三创建')
    ]
}