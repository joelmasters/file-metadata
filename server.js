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

app.use('/list', function(req, res) {

});

app.use('/', function(req, res) {
    
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
