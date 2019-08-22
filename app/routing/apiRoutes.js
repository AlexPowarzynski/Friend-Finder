const path = require("path");
const friendData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        let userFriendData = req.body;
        // console.log(userFriendData);

        let newFriendName = "";
        let newFriendPhoto = "";
        let maxRange = 40;
        // console.log(friendScoreArray);
        let friendScoreArray = userFriendData.scores;


        let sumOfUser = 0;
        for(let i = 0; i < friendScoreArray.length; i ++){
            sumOfUser += parseInt(friendScoreArray[i])
        }

        for (let i = 0; i < friendData.length; i++) {
        let tempDifference = 0;
            for (let j = 0; j < friendScoreArray.length; j++){
                tempDifference += parseInt(friendData[i].scores[j]);
            }
            let newTempDifference = Math.abs(tempDifference - sumOfUser);
                console.log("tempDifference" + newTempDifference);

            if(newTempDifference < maxRange){
                maxRange = tempDifference;
                newFriendName = friendData[i].name;
                newFriendPhoto = friendData[i].photo;
            }

        }
        friendData.push(userFriendData);
        res.json({name: newFriendName, photo: newFriendPhoto})

    })

};
