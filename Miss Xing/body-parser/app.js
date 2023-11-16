const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const adminRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);

app.all('/', (req, res, next) => {
    res.send('This is / page');
});
app.listen(3000);