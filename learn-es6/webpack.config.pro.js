/**
 * Created by hehui on 2016/9/6.
 */

var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

/**
 * 批量生成多入口文件的json对象
 * @param globPath
 * @returns {}
 */
function entries (globPath) {
    var files = glob.sync(globPath);
    var entries = {}, entry, dirname, basename;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        // console.log(entry + ',' + dirname + ',' + basename); // 调试使用
        // {'./src/es6/example': './src/es6/example.js' }
        // entries[path.join(dirname, basename)] = './' + entry;
        // {'example': './src/es6/example.js' }  webpack原生结果模式
        entries[basename] = entry;
    }
    return entries;
}

module.exports = {
    // entry: "./src/es6/index.js"模式会产生一个入口文件为main的文件
    /**
     *  Asset    Size  Chunks             Chunk Names
     *  main.js  3.1 kB       0  [emitted]  main
     */
    // entry: "./src/es6/index.js",
    entry: entries('./src/es6/**/*.js'),
    output: {
        path: 'dist/js',
        // publicPath: '/assets/homeui/',
        filename: '[name].js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer:{
        contentBase:'./dist/view'
    }
}

