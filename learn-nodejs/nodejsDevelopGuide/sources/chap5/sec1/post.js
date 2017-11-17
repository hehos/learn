var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
  var post = '';
  
  req.on('data', function(chunk) {
    post += chunk;
  });

  req.on('end', function() {
    post = querystring.parse(post);

    res.write('nodejs输出的结果：\n');
    res.write('title:' + post.title + '\n');
    res.write('text:' + post.text);
    res.end();
  });

}).listen(3000);
