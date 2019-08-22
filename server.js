const express = require("express");
const path = require("path");

let PORT = process.env.PORT || 8000;
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require("./app/routing/htmlRoutes");
require("./app/routing/apiRoutes");

app.listen(PORT, function(){
    console.log("Server is responding");
    console.log("App listening on port: " + PORT)
});

