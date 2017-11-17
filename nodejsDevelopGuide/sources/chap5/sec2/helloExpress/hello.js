/**
 * Created by hehui on 2017/5/7.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.redirect('/hello');
});

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});


var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});