const path = require('path');

console.log('__filename: ',__filename); //  represents the full path to the file path-demo.js 

console.log('__dirname: ', __dirname);  // represents the full path to the folder where path-demo.js file is located

console.log(path.join('folder1', 'folder2', 'index.html'));

console.log('...................................');
console.log(path.join('folder1', 'folder2', '../index.html')); // ../index.html means from folder2, jump one folder up and then concatenate index.html

console.log('...................................');
console.log(path.join(__dirname,'index.html')); // gives absolute path to the index.html file