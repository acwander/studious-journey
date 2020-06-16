//===========
//DEPENDENCIES
//============
const express = require("express");
const app = express();

//==========
//ROOT ROUTE
//==========
app.get("/", (req, res) => {
  res.send("Hello World");
});

//============
//LISTENER
//=============
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
