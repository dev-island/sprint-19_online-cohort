var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/books", async function (req, res, next) {
  const books = await Book.find();
  res.send({ books });
});

module.exports = router;
