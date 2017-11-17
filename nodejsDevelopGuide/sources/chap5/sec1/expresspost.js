var express = require('express');

// 4.x版本有问题。
// var app = express.createServer();
// app.use(express.bodyParser());
// app.all('/', function(req, res) {
//   res.send(req.body.title + req.body.text);
// });
//
// app.listen(3000);

// 4.x版本的实现。
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.all('/', function (req, res) {
  res.send(`
    express输出的结果：<br>
    title：${req.body.title}<br>text：${req.body.text}
  `);
});

app.listen(3001);