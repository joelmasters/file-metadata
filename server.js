// File Metadata Microservice
// Upload a file
// Respond with an alert about the size of the file

var fs = require('fs');
var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();


// set express server
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload/image', upload.single('input'), function(req, res, next) {
  console.log(req.file);
  res.json({succes: true});
  
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});
