
const Book = require('../models/books');

exports.getAllBook = (req, res, next) => {
    res.json(Book.getAllBooks());
}

exports.getBookById = (req, res) => {

    res.status(200).json(Book.BookById(req.params.id));
}

exports.getBookByAuthor = (req, res) => {
    res.status(200).json(Book.BookByAuthor(req.params.author));
}

exports.saveBook = (req, res) => {
    const { title, ISBN, publishDate, author } = req.body;
    new Book(null, title, ISBN, publishDate, author).save();
    res.status(201).json({message: 'Book created successfully'});
    
}
exports.updateBook = (req, res) => {
    const { title, ISBN, publishDate, author } = req.body;
    new Book(null, title, ISBN, publishDate, author).updateById(req.params.id);
    //bookUpdate.id = req.params.id;
    //bookUpdate.updateById(req.params.id);
    res.status(200).json({message: 'Book updated successfully'});
}
exports.deleteById = (req, res) => {
    Book.deleteById(req.params.id);
    res.status(200).json({message: 'Book deleted successfully'});
}