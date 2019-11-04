const friends = require("../data/friends");

module.exports = function(app) {

    // GET to display JSON of all possible friends
    app.get('/api/friends', function(req,res) {
        res.json(friends);
    });
  
    // POST that takes in survey results + compatibility logic
    app.post('/api/new', function(req,res) {
    
        var scoreDifference;
        var friendScore;
        var userScore;
        var newUser = req.body;

        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };

        res.json(bestMatch);
    });
};