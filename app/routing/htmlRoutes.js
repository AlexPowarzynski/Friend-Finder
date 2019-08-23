const path = require("path");


module.exports = function(app) {
    //Shows home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/public", "index.html"));
    });

    //Shows survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./../public", "survey.html"));
    });

    //Redirects back to homepage if address is wrong
    app.get("*", function (req, res) {
        res.redirect("/");
    });

};