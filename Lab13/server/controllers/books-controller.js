
const Book = require('../models/books');
module.exports.getAllBook = (req, res,next)=> {
          res.json(Book.getAllBooks());
}