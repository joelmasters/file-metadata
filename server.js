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
  
  // remove space decoding in address
  input = replaceAll(input, '%20', ' ');
  
  // check to see if input is unix timestamp
  if (!isNaN(new Date(input *1000))) {
    // timestamp is unix
    var unixTime = (new Date(input *1000)).getTime()/1000;
  
  }
  
  // create a date object from the input
  var inputDate = new Date(input *1000);
  if (isNaN(inputDate.valueOf())) {
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