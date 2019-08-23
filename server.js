const express = require("express");
const path = require("path");
let apiRoutes = require("./app/routing/apiRoutes");
let htmlRoutes = require("./app/routing/htmlRoutes");

//Uses the port Heroku sets up for live web app or given for localhost
let PORT = process.env.PORT || 8000;
let app = express();

//Builds req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("app/public"));
apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function(){
    console.log("Server is responding");
    console.log("App listening on port: " + PORT)
});


