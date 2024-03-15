const Book = require("../models/book");

const listBooks =  async (req, res) => {
  const books = await Book.find();
  res.render("booksTemplate", { books });
}

module.exports = {
  listBooks,
}