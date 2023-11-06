// Array Methods: find, filter, map and reduce

// find: calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true.
// If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// find: returns first element that matches condition
console.log('Find Method');
const fruits = ['banana', 'apple','blueberry', 'strawberry','raspberry'];
const result = fruits.find(element => element.endsWith('berry'));
console.log('Find Method - Display first element that fullfills condition: ' + result);


// filter: returns all elements that fulfill condition
console.log('Filter Method');
const filterresult = fruits.filter((element , index, array) => element.endsWith('berry'));
console.log('Filter Method - Display all elements that fullfill condition: ' + filterresult);


// map: returns a transformed array
console.log('Map Method');
const mapresult = fruits.map((currentelement, index, array) => currentelement.length);
console.log('Map Method - Display all elements that fullfill condition: ' + filterresult);


// Reduce Method: A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// reduce: has 4 arguments - previouselement(), element(), index(), array
const grades = [80,70,99,85,87,67];
let sum = grades.reduce((accum, current, index, array) => accum + current, 0);
console.log('The reduce method: ' + sum);

let average = grades.reduce((accum, current, index, array) => accum + current / array.length, 0);
console.log('Average: ' + average);