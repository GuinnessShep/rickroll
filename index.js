var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  var file = path.join(__dirname, 'rickroll.mp4');
  var stat = fs.statSync(file);
  res.writeHead(200, {
    'Content-Type': 'video/mp4',
    'Content-Length': stat.size
  });
  var readStream = fs.createReadStream(file);
  readStream.pipe(res);
}).listen(8080);
