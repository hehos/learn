var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('commons.js');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    // 自定义公共模块提取
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"]),
        new ExtractTextPlugin("[name].css")     // 独立打包样式文件
    ],
    //页面入口文件配置
    entry: {
        index : 'index',
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        //root: 'E:/github/flux-example/src', //绝对路径
        root: __dirname, //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            //AppStore : 'js/stores/AppStores.js',
            //ActionType : 'js/actions/ActionType.js',
            //AppAction : 'js/actions/AppAction.js'
            //commjs: __dirname + '/comm.js'
        }
    }
};