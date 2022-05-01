const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  year: String,
  genres: [{ type: String, require: true, trim: true, lowercase: true }],
  ISBN: String,
  imageLink: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
