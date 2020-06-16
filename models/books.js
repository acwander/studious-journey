const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: String,
  author: String,
  image: String,
  summary: String,
});

const Books = mongoose.model("book", booksSchema);

module.exports = Books;
