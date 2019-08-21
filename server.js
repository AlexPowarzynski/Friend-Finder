const express = require("express");
const path = require("path");

let PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static("public"));
