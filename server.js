// server.js
// where your node app starts

var fs = require('fs');
var express = require('express');
var app = express();

app.set('json spaces', 2);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var language = req.headers['accept-language'];
 
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});