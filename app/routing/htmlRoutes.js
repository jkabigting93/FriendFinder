var path = require("path");

module.exports = function(app) {
    
    // Default catch-all route that leads to home.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // GET route to /survey
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
};