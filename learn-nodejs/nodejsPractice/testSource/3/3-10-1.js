/**
 * Created by hehui on 2016/3/25.
 */

var EventEmitter = require('events').EventEmitter;
var channel = new EventEmitter();

channel.on('join', function(para) {
    console.log('Welcome1! 参数是：' + para);
});

channel.on('join', function(para) {
    console.log('Welcome2! 参数是：' + para);
});

channel.on('join', function(para) {
    console.log('Welcome3! 参数是：' + para);
});

channel.emit('join', '我是参数的值');

console.log(channel.listeners('join'));