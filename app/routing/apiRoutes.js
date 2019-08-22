const path = require("path");
const friendData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        let newFriendData = req.body;
        console.log(newFriendData);
        friendData.push(newFriendData);
        let friendScore = newFriendData.scores;

        let newFriendName = "";
        let newFriendPhoto = "";
        let maxRange = 40;

        for (let i = 0; i < friendData.length; i++) {
            for (let a = 0; a < friendScore.length; a++){
                
            }
        }

    })

};