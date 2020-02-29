var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressHandleBars = require("express-handlebars");
var logger = require("morgan");


var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

app.use(logger("dev"));
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

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/DailyNews";

mongoose.connect(MONGODB_URI, function(error){
  if(error) {
    console.log(error);
  }
  else {
    console.log("Mongoose is connected")
  }
});

var routes = require("./controller/controller.js");
app.use("/", routes);
// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
