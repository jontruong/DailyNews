var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressHandleBars = require("express-handlebars");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");




var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

//Set Up an express Router

var router = express.Router();
// Configure middleware


//Connect Handlebars to our Express app
app.engine("handlebars", expressHandleBars({
  defaultLayout:"main"
}));
app.set("view engine", "handlebars");
//Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended:false
}));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static(__dirname + "/public"));

//Router
app.use(router);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
