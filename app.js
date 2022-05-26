const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");


app.listen(PORT, console.log("Server is started at " + PORT));