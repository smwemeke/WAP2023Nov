const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/product', (req,res,next) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
});

router.post('/product', (req, res,next) => {
    res.send(`Product Name: ${req.body.name}, Quantity: ${req.body.quantity}, Price: $${req.body.price}`);
});

module.exports = router;