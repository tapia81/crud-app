const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body);
    await book.save();
    return res.status(201).json({
      book,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ books });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getBookByID = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json({ book });
    }
    return res.status(404).send("No Book Exist with that ID");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateBook = (req, res) => {
  try {
    const { id } = req.params;
    Book.findByIdAndUpdate(id, req.body, { new: true }, (err, book) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!book) {
        res.status(500).send("Book Not Found");
      }
      return res.status(200).json(book);
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Book Deleted");
    }
    throw new Error("Book Not Found");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByID,
  updateBook,
  deleteBook,
};
