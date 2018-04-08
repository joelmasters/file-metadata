// server.js
// where your node app starts

var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const tests = ['test 1', 'test 2', 'test 3'];

app.get('/test', function(req, res) {
  res.send(tests);
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});