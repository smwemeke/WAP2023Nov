const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req,res,next) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/', (req, res,next) => {
    res.send(`Product Name: ${req.body.name}, Quantity: ${req.body.quantity}, Price: $${req.body.price}`);
});

module.exports = router;