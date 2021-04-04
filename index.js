const express = require("express");
const port = 8000;
const app = express();
const path = require("path");

// Setting upp view engine
app.set("view", "ejs");
path.join("views", "views");



// Creating Server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error`);
  }
  console.log(`Server is running on port`, port);
});
