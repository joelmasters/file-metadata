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
  //res.send("Hello");
});

app.use('/list', function(req, res) {
  
  //res.send("got here");
  
   mongo.connect(url, function(err, db) {
     if (err) {
         return (err); 
      }

      var myDB = db.db('url-shortener');
      var links = myDB.collection('links');
     
      links.find({ long:  { $exists: true }}).toArray(function(err, data) {
        if (err) throw err;
        db.close();
        res.send(data);
      });
   });
});

app.use('/', function(req, res) {
  // remove the leading '/' from the input
  const inputURL = req.path.slice(1);
  
  if (checkLink(inputURL) == "shortened link") {
    // check the db for shortened link and redirect as appropriate 
    checkDB(inputURL, "shortform").then(function (dbResult) {
      console.log(dbResult);
    
      if (dbResult.indexOf("(redirect to short)") != -1) {
        // found shortform link in db  
        var redirectLink = dbResult.split(')')[1];
        // redirect to link found
        //res.send("found shortened link: " + redirectLink);
        res.redirect(redirectLink);
      }
      else if (dbResult == "error" ) {
         res.send("error found error"); 
      }
      else {
        res.json(dbResult);  
      }
    });
  }
  else if (checkLink(inputURL) == "link") {
     // check the db for longform link and display shortened link if available
     //   - if not available, create a new shortened link
    
    checkDB(inputURL, "longform")
      .then(function (dbResult) {
        res.json(dbResult);
      }); 
  }
  else {
    res.send(checkLink(inputURL));
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
  if (splitArrOne[0] !== "http" && splitArrOne[0] !== "https") {
    return ("error at https: " + splitArrOne[0]);
  }
  var splitArrTwo = splitArrOne[1].split('.');
  if (splitArrTwo.length < 2) {
    return "error at . length";
  }
  return "link";
}

// checks the database for links
function checkDB(link, form) {
  
  return new Promise((resolve, reject) => {
  
    mongo.connect(url, function(err, db) {
      if (err) {
         return (err); 
      }

      var myDB = db.db('url-shortener');
      var links = myDB.collection('links');

      // check for longform links
      if (form == "longform") {

        links.findOne({ long : link }, { _id: 0 })
        .then(function (foundLink) {
            if (foundLink) {
                  // found longform link already in database... return it
                  db.close();
                  resolve(foundLink);
            }

            // add an entry to the db and create a random number 000-999
            var ranShort = getRandomNum().toString();

            // insert new link
            links.insert({ long : link, short : ranShort })
              .then(() => {
                // find the new inserted link
                links.findOne({ long : link }, { _id: 0, long: 1, short: 1})
                  .then(function (foundInsertedLink) {
                    db.close();
                    resolve(foundInsertedLink);
                });
            });   
        });

      }
      else if (form == "shortform") {
        // check for shortform links

        links.findOne({ short : link }, { _id: 0, long: 1, short: 1})
          .then(function (foundLink) {
            if (foundLink) {
               db.close();
               resolve("(redirect to short)" + foundLink.long); 
            }
            else {
               db.close();
               resolve("error"); 
            }
          });
      }
      else {
        db.close();
        resolve("no form specified");
      }

    });

  });
}

// gets a random number from 000-999
function getRandomNum() {
  var ranNum = Math.round(Math.random()*999);
  return ('000' + ranNum).substr(-3); 
}