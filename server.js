// server.js
// where your node app starts

var fs = require('fs');
var express = require('express');
var app = express();
var url = require('url');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  var input = url.parse(req.path);
  console.log(input);
  //input = input.toString().splice(0, 1);
  res.send(input);
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});