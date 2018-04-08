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
  // remove leading '/' from address
  var input = req.path.slice(1);
  input = replaceAll(input, '%20', ' ');
  var inputDate = new Date(input);
  if (inputDate == null) {
    var unixTime = 'null';
    var naturalTime = 'null';
  }
  else {
    var unixTime = inputDate.getTime()/1000;
    var naturalTime = getNamedMonth(inputDate.getMonth()) + ' ' + inputDate.getDay() + ', ' + inputDate.getFullYear();
  }
  var timeOut = { 
    "unix" : unixTime,
    "natural" : naturalTime
  };
  res.json(timeOut);
  //res.send(JSON.stringify(timeOut, null, '\t'));
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

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}