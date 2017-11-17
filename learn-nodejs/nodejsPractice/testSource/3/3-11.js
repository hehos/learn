/**
 * Created by hehui on 2016/3/25.
 */

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};


// 添加join事件的监听器，保存用户的client对象，以便程序可以将数据发送给用户
channel.on('join', function (id, client) {
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        // 忽略发出这一广播数据的用户
        if(id != senderId) {
            this.clients[id].write(message);
        }
    }
    // 添加一个专门针对当前用户的broadcast事件监听器
    this.on('broadcast', this.subscriptions[id]);
});

// 用户离开时的事件监听器
channel.on('leave', function (id) {
    this.removeListener('broadcast', this.subscriptions[id]);
    this.emit('broadcast', id, id + ' 已经离开。\n');
});

// 停止广播服务的事件监听器（但不关闭服务器）
channel.on('shutdown', function () {
    channel.emit('broadcast', '', '广播服务已关闭！');
    channel.removeAllListeners('broadcast');
});

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;

    console.log(id);

    // 当有用户连到服务器上来时发出一个join事件，指明用户ID和client对象，
    // 且绑定广播事件
    channel.emit('join', id, client);

    // 新用户上线通知
    channel.emit('broadcast', id, id + ' 上线了！\n');

    // 当有用户发送数据时，发出一个频道broadcast事件，指明用户ID和消息
    client.on('data', function (data) {
        data = data.toString();
        if('shutdown\r\n' == data) {
            channel.emit('shutdown');
        }
        channel.emit('broadcast', id, data);
    });

    // 在用户断开连接时发出leave事件
    client.on('close', function () {
        channel.emit('leave', id);
    });
});

// 监听端口
server.listen(8888);


