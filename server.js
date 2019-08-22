const express = require("express");
const path = require("path");

let PORT = process.env.PORT || 8000;
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./app/public")));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("Server is responding");
    console.log("App listening on port: " + PORT)
});


