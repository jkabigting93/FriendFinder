var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// Initial Port
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});