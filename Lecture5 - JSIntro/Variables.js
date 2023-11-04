const i =10;
const j = 10.89;

console.log(typeof i);

console.log(typeof j);

// Numbers
console.log('3' + 2);

console.log('5' * 6);

console.log("5" * 2);

console.log('5tt' * 6);

//Logical operators
console.log('******** Logical operators******');
console.log(2 == '2.0');

console.log(2 === '2.0');

//boolean operators
const result = 3 > 7;
if(result)
{
    console.log('inside true...');
}
else{
    console.log('inside false.......');
}


const x=5;
console.log('!! Idiom')
console.log(!x);
console.log(x);
console.log(!!x);

//creating objects using object literal

const person = {
    firstname:'smith',
    lastname :'john'
};

person.firstname = 'yoyo';
console.log(person);
