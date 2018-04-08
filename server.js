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
  // remove leading '/' from address
  var input = url.parse(req.path);
  /*input = input.replace('%', ' ');
  var inputDate = new Date(input);
  var unixTime = inputDate.getTime()/1000;
  var naturalTime = getNamedMonth(inputDate.getMonth()) + ' ' + inputDate.getDay() + ',' + inputDate.getYear();
  var timeOut = { 
    "unix" : unixTime,
    "natural" : naturalTime
  }*/
  res.send(input);
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
  
function getNamedMonth(monthNum) {
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
  return months[monthNum];
}