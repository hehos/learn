/**
 * Created by hehui on 2016/3/11.
 */

// 响应一次
var server = net.createServer(function(socket) {
    socket.once('data', function(data) {
        socket.write("返回的data：" + data);
    });
});


server.listen(8888);


