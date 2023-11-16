const express = require('express');

const app = express();
app.enable('case sensitive routing');

app.enable('etag');
app.set('env', development);

app.use('/users', (req, res,next) => {
    res.send('Hello from /Users');
});

// 

app.use('/', (req, res, next) => {
    res.send('Hello from express');
});

app.listen(3000, () => {
    console.log('Your server is running')
});