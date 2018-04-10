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
  
  if (checkLink(inputURL) == "error")
  {
    res.send("error");
  }
  else if (checkLink(inputURL) == "shortened link") {
     // check the db for shortened link and redirect as appropriate 
  }
  else if (checkLink(inputURL) == "link") {
     // check the db for longform link and display shortened link if available
     //   - if not available, create a new shortened link
  }
  
  
  
  
  
  
});

const listener = app.listen(process.env.PORT, () => {
   console.log(`Your app is listening on port ${listener.address().port}`)
});


// for checking for correct formatting on hyperlink
function checkLink(link) {
  // check to see if the link is shortened (contains exactly three numbers)
  if (/^\d+$/.test(link) && link.length == 3) {
    return "shortened link";
  }
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

// checks the database for links
function checkDB(link, form) {
  
  mongo.connect(url, function(err, db) {
    if (err) throw err;

    // collection is named 'links'
    db.links.insert();
  
    // check for longform links
    if (form == "longform") {
      
      var foundLink = db.links.findOne({ long : link }, { _id: 0, long: 1, short: 1});
      
      if (foundLink) {
            // found longform link already in database... return 
            return JSON.stringify(foundLink);
      }
      
      // add an entry to the db and create a random number 000-999
      db.links.insert({"long" : link, "short" : getRandomNum });

    }
    else if (form == "shortform") {
      // check for shortform links

    }
    
  
    db.close();
  
  });
  
}

function getRandomNum() {
  var ranNum = Math.round(Math.random()*999);
  return ('000' + ranNum).substr(-3); 
}