var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
  res.send('This is my test app');
  next();
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
});