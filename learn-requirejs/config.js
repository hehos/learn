/**
 * Created by hehui on 2016/6/2.
 */

require.config({
    baseUrl: 'bower_components',
    paths: {
        jquery: 'jquery/dist/jquery.min.js'
    },

    // 加载非规范的模块
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});


