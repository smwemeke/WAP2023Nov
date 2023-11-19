const express = require('express');

const app = express();

const bookRouter = require('./routes/book-router');

app.use('/books', bookRouter);

app.listen(3000, ()=> {
    console.log('Listening on 3000....');
});