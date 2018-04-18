// Image search abstraction layer
// Requests in the form of /<search term>?offset=<page offset>
// Return:
// {
//   image url:
//   alt text: 
//   page url:
// }

var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var mongo = require('mongodb').MongoClient;
var url = process.env.MONGOLAB_URL;

// set express server
app.set('json spaces', 2);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/', function(req, res) {
  var inputURL = req.path.slice(1);
  var searchTerm = inputURL.split('?')[0];
  searchTerm = searchTerm.replace('%20', ' ');
  var offset = inputURL.split('?offset=')[1];
  
  const options = {
    hostname: 'api.imgur.com',
    path: '/3/gallery/search/?q=' + searchTerm,
    headers: {
      Authorization: Client-ID {{client
      }
  };
  
  http.get(searchURL, function(response) {
    var buffer = "";
    var data = "";
    var route = "";
    
    response.on('data', function(chunk) {
      buffer += chunk;
    });
    
    response.on('end', function(err) {
      if (err) throw err;
      
      data = JSON.parse(buffer);
      
    });
    
  });
  
    
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
