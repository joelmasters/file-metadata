// File Metadata Microservice
// Upload a file
// Respond with an alert about the size of the file

var fs = require('fs');
var express = require('express');
var app = express();
var https = require('https');
var mongo = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URL;

// set express server
app.set('json spaces', 2);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
