var fs = require('fs');
var express = require('express');
var app = express();

app.set('json spaces', 2);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress).split(',')[0];
  const language = req.headers['accept-language'].split(',')[0];
  const os = req.headers['user-agent'].split('(')[1].split(')')[0];

  var headers = {
    "ip address" : ip,
    "language" : language,
    "operating system" : os,
  }
  
  res.json(headers);
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});