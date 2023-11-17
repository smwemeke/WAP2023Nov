const express = require('express');
const userRouter = require('./routes/router-user');
const productRouter = require('./routes/router-product');
const path = require("path")

// 2. Instantiations
const app = express(); 
app.use(express.urlencoded({extended: true}));

// 4. Middleware
app.use(express.static(path.join(__dirname, 'public', 'resources')));


//app.use('/public', express.static(path.join(__dirname, 'public', 'resources', 'css')));

app.use('/user',userRouter);
app.use('/product',productRouter);

app.get('/', (req,res,next) =>{
    console.log('New Page');
    res.end('New Page');
});

// 404 page
app.use((req,res,next) =>{
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

// Error-handling
app.use((err, req,res,next) => res.status(500).send('Something went wrong'));
// 7. bootup
app.listen(3000 , () => console.log('Listening on 3000'));