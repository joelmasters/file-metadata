// grab the path information
// check it for proper formatting
// if formatted properly, output two hyperlinks:
//   - the input link
//   - the shortened link
// if not formatted properly, output an error

var fs = require('fs');
var express = require('express');
var app = express();

app.set('json spaces', 2);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  // remove the leading '/' from the input
  const inputURL = req.path.slice(1);
  
  
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});

function checkLink(link) {
  var splitArrOne = link.split('://');
  if (splitArrOne[0] != "http" || splitArrOne[0] != "https") {
    return "error";
  }
  var splitArrTwo = splitArrOne[1].split('.');
  
}