const express = require('express');
const bookController = require('../controllers/books-controller');
const router = express.Router();

router.get('/',bookController.getAllBook);
router.get('/:id',bookController.getBookById);
router.get('/:author', bookController.getBookByAuthor);
router.post('/',bookController.saveBook);
router.put('/:id',bookController.updateBook);
router.delete('/:id',bookController.deleteById);

module.exports = router;