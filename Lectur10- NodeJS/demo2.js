const fs = require('fs'); //  imports 'fs' module, a built-in Node.js module for interacting with the file system.
console.log('first');
fs.readFile('hello.txt', () => console.log('second')); // file reading is asynchronous, does not wait for it to fininsh reading contents and moves onto the next line immediately
console.log('third');
