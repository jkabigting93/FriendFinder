var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app) {

    // GET to display JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    // POST that takes in survey results + compatibility logic
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        // var bestMatch = {
        //     name: "",
        //     photo: "",
        //     friendDifference: 1000
        // };
        // var userData = req.body;
        // var userScores = userData.scores;
        // var userName = userData.name;
        // var userPhoto = userData.photo;
        // var totalDifference = 0;

        // // loop through all friends for scores
        // for (var i = 0; i < friends.length - 1; i++) {
        //     console.log(friends[i].name);
        //     totalDifference = 0;
        //     // 2nd loop to compare all other user's scores with current user
        //     for (var j = 0; j < 10; j++) {
        //         totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        //         if (totalDifference <= bestMatch.friendDifference) {
        //             bestMatch.name = friends[i].name;
        //             bestMatch.photo = friends[i].photo;
        //             bestMatch.friendDifference = totalDifference;
        //         }
        //     }
        // }
        // friends.push(userData);
        // res.json(bestMatch);
    });
};