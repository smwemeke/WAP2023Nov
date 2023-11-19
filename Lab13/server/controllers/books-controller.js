
const Book = require('../models/books');

exports.getAllBook = (req, res,next)=> {
          res.json(Book.getAllBooks());
}

exports.getBookById = (req, res) => {
res.status(200).json(Book.getBookById(req.params.id));
}


exports.saveBook = (req, res) => {
    const {title, ISBN, publishDate, author} = req.body;
    new Book(null, title, ISBN, publishDate, author).save();
    res.status(201).end();
    //json(savedBook);
    }
    exports.updateBook = (req, res) => {
    const {title, ISBN, publishDate, author} = req.body;
    const updatedBook = new Book(id, title, ISBN, publishDate, author).updateById(req.param.id);
    res.status(200).end();
    }
    exports.deleteById = (req, res) => {
    Book.deleteById(req.params.prodId);
    res.status(200).end();
    }