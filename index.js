const express = require("express");
const port = 8000;
const app = express();
const path = require("path");
// const expresslayouts = require('expressLa')


// Setting up view engine
app.set("view", "ejs");
path.join("views", "views");

//Setting up router
app.use('/', require('./routes/index'))



// Creating Server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error`);
  }
  console.log(`Server is running on port`, port);
});
