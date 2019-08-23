const path = require("path");
const friendData = require("../data/friends.js");

module.exports = function (app) {

    //Grabs list of "friends" from friends.js
    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    //Post request used for when submit button is clicked.
    app.post("/api/friends", function (req, res) {
        //Grabs the user's data
        let userFriendData = req.body;
        // console.log(userFriendData);

        //Setting empty variables to be able to post to html at the end of this request.
        let newFriendName = "";
        let newFriendPhoto = "";

        //Max range that a user is able to be from the closest match
        let maxRange = 40;
        // console.log(friendScoreArray);

        //Grabs the scores from the user's input
        let friendScoreArray = userFriendData.scores;

        //Makes a sum of the user's scores
        let sumOfUser = 0;
        for(let i = 0; i < friendScoreArray.length; i ++){
            sumOfUser += parseInt(friendScoreArray[i])
        }

        //This whole function checks for the closest match by looping through each "friend" then looping through their scores
        for (let i = 0; i < friendData.length; i++) {
        //Set's a temporary difference between each of the looped friends
        let tempDifference = 0;
            //Second loop
            for (let j = 0; j < friendScoreArray.length; j++){
                //Sets the temp difference equal to the sum of each of their scores and finds the absolute value
                tempDifference += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(friendScoreArray[j]));
            }

            //Calculates the difference between the user and each "friend" and get's the absolute value
            // let newTempDifference = Math.abs(tempDifference - sumOfUser);
                console.log("tempDifference " + tempDifference);

            //For each time it loops through it sets a new max range
                console.log(maxRange);
            if(tempDifference < maxRange){
                maxRange = tempDifference;

                //Sets those variables that we left empty earlier
                newFriendName = friendData[i].name;
                newFriendPhoto = friendData[i].photo;
            }

        }
        //Pushes the user's data into the friendsArray to be used for the next time the application is used.
        friendData.push(userFriendData);
        //Use res.json to create a json object that we can use to push to modal.
        res.json({name: newFriendName, photo: newFriendPhoto})

    })

};
