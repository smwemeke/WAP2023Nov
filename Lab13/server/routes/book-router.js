const express = require('express');
const bookController = require('../controllers/books-controllers');
const router = express.Router();

router.get('/',bookController.getAllBook);
router.get('/:id',);
router.post('/',);
router.put('/:id',);
router.delete('/:id',);




module.exports = router;