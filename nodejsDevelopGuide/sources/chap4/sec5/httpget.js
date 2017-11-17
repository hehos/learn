//httpget.js

var http = require('http');

http.get({host: '192.168.0.188'}, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
});
