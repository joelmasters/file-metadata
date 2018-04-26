// File Metadata Microservice
// Upload a file
// Respond with an alert about the size of the file

var fs = require('fs');
var express = require('express');
var multer = require('multer');

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var app = express();


// set express server
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/', upload.single('image'), function(req, res, next) {
  console.log(req.file);
  var fileSize = req.file.size.toString();
  res.send(fileSize);
});

app.get('/upload', function(req, res) {
  
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
