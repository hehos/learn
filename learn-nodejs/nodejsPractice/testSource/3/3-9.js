/**
 * Created by hehui on 2016/3/11.
 */


var net = require('net');

var server = net.createServer(function(client) {
    var id = client.remoteAddress + '|' + client.remotePort;
    client.on('connect', function () {
        client.write("连接上了");
    });
    client.on('data', function(data) {
        client.write(id + "返回的data：" + data);
    });
});

server.listen(8888);