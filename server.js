// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const Deck = require('card_deck');
var mysql = require("mysql");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("🂠 🃟 🂿 WAR is listening on PORT " + PORT + " " + "🂠 🃟 🂿");
  });
  