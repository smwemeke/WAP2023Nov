const express = require('express');
const userRouter = require('./routes/router-user');
const productRouter = require('./routes/router-product');
const Router404 = require('./routes/404');

// 2. Instantiations
const app = express(); 
app.use(express.urlencoded({extended: true}));


// 4. Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter);
app.use(productRouter);
app.use(Router404);
// app.use('/', (req,res,next) =>{
//     console.log('New Page');
//     res.end('New Page');
// });

// 404 page
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});
// Error-handling
app.use((err, req,res,next) => res.status(500).send('Something went wrong'));
// 7. bootup
app.listen(3000 , () => console.log('Listening on 3000'));