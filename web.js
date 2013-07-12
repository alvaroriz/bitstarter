var express = require('express');

var app = express.createServer(express.logger());


var fs = require('fs');
fs.readFile('./index.html', 'utf8', function(err, data) {
  // the data is passed to the callback in the second argument
  console.log(data);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});