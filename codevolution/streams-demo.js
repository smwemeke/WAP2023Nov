// A stream is a sequence of data that is being moved from one point to another oer time
// built-in module

const fs = require('fs');
const readableStream = fs.createReadStream('./file1.txt', utf-8);

const writableStream = fs.createWriteStream('./file2.txt', utf-8);