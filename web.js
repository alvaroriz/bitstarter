var express = require('express');

var app = express.createServer(express.logger());

fs.writeFile('index.html', 'Vai que vem', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});