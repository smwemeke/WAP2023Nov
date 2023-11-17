const express = require('express');
const userRouter = require('./routes/router-user');
const productRouter = require('./routes/router-product');

// 2. Instantiations
const app = express(); 
app.use(express.urlencoded({extended: true}));

// 4. Middleware
app.use(userRouter);
app.use(productRouter);

// 404 page
app.use((req,res,next) => {
    res.status(404).send( 'Page not found!');
});
// Error-handling
app.use((err, req,res,next) => res.status(500).send('Something went wrong'));
// 7. bootup
app.listen(3000 , () => console.log('Listening on 3000'));
