// Array Methods: push, pop, shift and unshift

// Push - adds one or more elements to the end of the array, and returns the new length of the array

// Pop - removes the last element from an array and returns that element

// Shift - Removes the first element from an array and returns that element

// Unshift - adds one or more elements to the front of the array, and returns the new length of the array


const arr = [1,2,3,4,5,6,7,8,9,10,]

console.log('------push and pop----------');

let addElement = arr.push(11);  // Adding 11 to the end of array
console.log(addElement);
console.log(arr);

let removeElemenet  = arr.pop();
console.log(removeElemenet);
console.log(arr);

console.log('------shift and unshift----------');

let removefrontElement = arr.shift();
console.log(removefrontElement);
console.log(arr);

let addfrontelement = arr.unshift('A');
console.log(addfrontelement);
console.log(arr);