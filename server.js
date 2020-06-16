//===========
//DEPENDENCIES
//============
const express = require("express");
const app = express();

//===========
//MIDDLEWARE
//===========
app.use(express.json());
app.use(express.static("public"));

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
