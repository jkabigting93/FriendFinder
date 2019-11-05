var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// Initial Port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public"));

// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});