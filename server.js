// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const Deck = require('card_deck');
var mysql = require("mysql");



// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;
var port2 = process.env.PORT2 || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  
//   app.listen(port2, function() {
//     console.log("App listening on PORT " + port2);
//   });    
