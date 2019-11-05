var friends = require("../data/friends");

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

module.exports = function(app) {

    // GET to display JSON of all possible friends
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });
    
    // POST that takes in survey results + compatibility logic
    app.post("/api/new", function(req,res) {
        var currentUser = req.body;
        var candidateArray = [];

        console.log("Current User: " + currentUser);
        for(var i = 0; i < friends.length; i++) {
            candidateArray.push(calcTotalDifference(currentUser, friends[i]));
        }
        
        candidateArray.sort(function(x, y) {
            var diff1 = x.totalDiff;
            var diff2 = y.totalDiff;
            if (diff1 < diff2) {
                return -1;
            } else if (diff1 > diff2) {
                return 1;
            }
            return 0;
        });

        for (var i = 0; i < candidateArray.length; i++) {
            console.log(candidateArray[i].name, candidateArray[i].photo, candidateArray[i].totalDiff);
        }
        friends.push(currentUser);

        console.log("Congratulations! Your most compatible match is " + candidateArray[0].name, + candidateArray[0].photo, candidateArray[0].totalDiff);

        res.json(candidateArray[0]);
    });
};