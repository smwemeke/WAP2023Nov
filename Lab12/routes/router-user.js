const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/user', (req,res,next) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

router.post('/user', (req, res,next) => {
    res.send(`FirstName: ${req.body.firstname}, LastName: ${req.body.lastname}, Age: ${req.body.age}, Gender: ${req.body.gender}, Nationality: ${req.body.country}`);
    console.log('User added successfully');
});

module.exports = router;