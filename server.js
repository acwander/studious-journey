//===========
//DEPENDENCIES
//============
const express = require("express");
const app = express();
const mongoose = require("mongoose")

//===========
//MIDDLEWARE
//===========
app.use(express.json());
app.use(express.static("public"));

//=========
//ROUTERS
//==========
const booksController = require('./controllers/books.js');
app.use('/books', booksController);

//==========
//ROOT ROUTE
//==========


//============
//LISTENER
//=============
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
