// grab the path information
// check it for proper formatting
// check the database for shortform link
//   - if it exists, re-route to new link
// check database for longform link
//   - if the link doesn't exist, create a new one
//   - if it does exist, output the two hyperlinks
// if formatted properly, output two hyperlinks:
//   - the input link
//   - the shortened link
// if not formatted properly, output an error

var fs = require('fs');
var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URL;

// set express server
app.set('json spaces', 2);
app.use(express.static('public'));



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  // remove the leading '/' from the input
  const inputURL = req.path.slice(1);
  
  mongo.connect(url, function(err, db) {
    if (err) throw err;

    // collection is named 'links'
    //var collection = db.collection('links');

    db.links.insert();
    db.close();
  
  });
  
  
  
  
  if (checkLink(inputURL) == "error")
  {
    res.send("error");
  }
  
  
  
  
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});


// for checking for correct formatting on hyperlink
function checkLink(link) {
  if (
  var splitArrOne = link.split('://');
  if (splitArrOne[0] != "http" || splitArrOne[0] != "https") {
    return "error";
  }
  var splitArrTwo = splitArrOne[1].split('.');
  if (splitArrTwo.length < 2) {
    return "error";
  }
  return "link";
}