const express = require('express');

const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/','/add-product',(req, res,next) => {
    // res.setHeader('content-type', 'text/html')
    // res.send(fs.readFileSync(path.join(__dirname, 'views', 'add-product.html'), utf8))
    
    fs.createReadStream(path.join(__dirname, '..' , 'views', 'add-product.html')).pipe(res);
});

router.post('/save-product', (req, res,next) =>{
    console.log('save product');
    console.log(req.body);
    res.send('Saved Successfully');

});
module.exports = router;