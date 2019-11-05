var friends = require("../data/friends");

module.exports = function(app) {

    // GET to display JSON of all possible friends
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
  
    // POST that takes in survey results + compatibility logic
    app.post("/api/new", function(req,res) {
        var currentUser = req.body;
        var scoreDifference;
        var friendScore;
        var userScore;
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };

        console.log("Current User: " + currentUser);

        for(var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            scoreDifference = 0;
        
            for (var j = 0; j < currentUser.scores.length; j++) {
                friendScore = currentFriend.scores[j];
                userScore = currentUser.scores[j];
                scoreDifference  += Math.abs(parseInt(userScore) - parseInt(friendScore));
            } 

            if (scoreDifference <= bestMatch.friendDiff){
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = scoreDifference ;
            }
        } 
        res.json(bestMatch);
    });
};

// Logic using arrays to compare user scores
calcTotalDifference = function(user, candidate) {
    var totalDiff = 0;
    var userScores = user.scores.map(function(x) {
        return parseInt(x, 10);
    });
    console.log("userScores: ", userScores.join(" "));

    var candidateScores = candidate.scores.map(function (x) {
        return parseInt(x, 10);
    });
    console.log("candidateScores: ", candidateScores.join(" "));

    for (var i = 0; i < userScores.length; i++) {
        totalDiff += Math.abs(userScores[i] - candidateScores[i]);
    }
    console.log("totalDiff: ", totalDiff);

    return {
        name: candidate.name,
        photo: candidate.photo,
        totalDiff: totalDiff
    };
}