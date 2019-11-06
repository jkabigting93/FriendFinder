var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

    // GET to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    // POST that takes in survey results + compatibility logic
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        friends.push(req.body);
    });
};