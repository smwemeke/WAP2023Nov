// Array Methods: concat, slice, splice



// Syntax: Splice(startindex, numberofelementstodelete, addelements)
// Splice can delete and add elements as well

const arr = [1,2,3,4,5,6]
const removedElements = arr.splice(2);  // 2 is index to start removing  all elements after index 2
console.log('Removed Elements starting at index 2: ' + removedElements);

const arr2 = ['a', 'b', 'c', 'd', 'e','f','g','h'];
const deletedElements = arr2.splice(2,3); // means  starting from index 2 and remove 3 elements only
console.log('Deleted number of Elements: ' + deletedElements);


const arr3 = ['a', 'b', 'c', 'd', 'e','f','g','h'];
const addElements = arr3.splice(3, 2, 'WAP','EA');
console.log('Elements added after removing 2 elements: ' + addElements);
console.log('New arr3: ' + arr3);

console.log('------------Slice Demos----------------');

// Slice - Returns a new array copying to it all elements from index start to end(not including end)
const arr4 = ['a', 'b', 'c', 'd', 'e','f','g','h'];
const slice1 = arr4.slice(3)
console.log(slice1);

const arr5 = ['a', 'b', 'c', 'd', 'e','f','g','h'];
const slice2 = arr5.slice(3,5);
console.log(slice2);

console.log('------------Concat Demos----------------');

//Concat - creates a new array that includes values from other arrays and additional items

const array1 = [1,2,3,4,5];
const array2 = ['a','b','c','d'];
const result = array1.concat(array2);
console.log(result);

console.log('------------Split and Join Demos----------------');
const str = 'The Lord will guide us all out lives';
const strArr = str.split(" ");
console.log(strArr);

const converted = strArr.join('');
console.log('Joined Array: ' + converted);
