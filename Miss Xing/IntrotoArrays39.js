  /* Parts to cover
      1. Create arrays in 2 ways
      2. Get last element using "at"
      3. "length" property: the greatest numeric index + 1
      4. Loop an array*/


//   1. How to create an array

// Method 1 : not widely used
const arr = new Array();
console.log(arr);
arr[0] = 'A';
arr[1] = 'B'
console.log(arr);

// Method 2: Empty Array
console.log('Method 2: Empty Array');
const arr2 = [];
console.log(arr2);
arr2[0] ='Alvin';
arr2[1] = 'Aaron';
console.log(arr2);

// Method 3: Field Array
console.log('Method 2: Field Array');
const arr3 = ['Damien', 'Sue'];
console.log(arr3);
arr3.push(1); //adding element to the end of the array
console.log(arr3);

// 2. Get last element using "at"
const arr4 = [2,5,8,9,1,90];
console.log('use at word to access last element in array: ' + arr4.at(-5) );

// 3. "length" property: the greatest numeric index + 1 (length == index +1)

// Length property
console.log('Length property');
arr5 = ['a', 'b','c','d'];
console.log(arr5.length);
arr5[10] = 'Surprise';
console.log(arr5.length);



//4. Loop an array*

console.log('Looping an array');

console.log('Method 1: ===== for loop==========');
for(let i=0; i<arr5.length; i++){
    console.log('Element at index ' + i + ': ' + arr5[i]);
}

console.log('Method 2: ===== for of ==========');
for(let item of arr5){
    console.log('Element at index ' + item);
}

console.log('Method 3: ===== for each ==========');
arr5.forEach((element, index, array) => {
    console.log(element, index, array);
});
arr5.forEach(element => console.log(element));