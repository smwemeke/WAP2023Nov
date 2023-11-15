const fs = require('fs');
const path = require('path');
const writable = fs.createWriteStream('person.jpg');

const readable = fs.createReadStream(path.join('hello.txt'));


readable.on('data', chunk =>{
    //console.log(chunk);
    writable.write(chunk);
})

