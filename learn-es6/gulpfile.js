var gulp = require('gulp'),
    clean = require('gulp-clean');

var gutil = require("gulp-util");
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var webpackConfigPro = require("./webpack.config.pro.js");

var pkg = require('./package.json');

var cf = {
    dir: {
    },
    file: {
        js: 'src/js/*',
        es6: 'src/es6/*',
        scss: 'src/scss/*'
    }
}

// ==============================
// webpack
gulp.task("webpack", ['clean'], function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});
gulp.task("webpackPro", ['cleanPro'], function(callback) {
    var myConfig = Object.create(webpackConfigPro);
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('clean', function () {
    return gulp.src(['dev'], {read: false})
        .pipe(clean());
});

gulp.task('cleanPro', function () {
    return gulp.src(['dist'], {read: false})
        .pipe(clean());
});

// 预设任务

gulp.task('watch', function() {
    gulp.watch(
        [
            cf.file.scss,
            cf.file.es6
        ],
        ['webpack']);

});
gulp.task('default', function() {
    gulp.start(['webpack']);
});

gulp.task('watchPro', function() {
    gulp.watch(
        [
            cf.file.scss,
            cf.file.es6
        ],
        ['webpackPro']);

});
// 预设任务
gulp.task('pro', function() {
    gulp.start(['webpackPro']);
});

