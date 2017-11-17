var events = require('events');

var emitter = new events.EventEmitter();

// emitter.emit('error');
// 为发射error 事件的对象设置监听器，避免遇到错误后整个程序崩溃！
emitter.on('error', function () {
  console.log('发生错误了！')
})

emitter.emit('error');