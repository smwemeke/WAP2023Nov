// const fruit = ['Banana', 'Kiwi','Apple', 'Pear', 'Orange' ];

// // Method 1: to iterate
// for(let i=0; i<fruit.length;i++){
//     console.log('Method for ' + fruit[i]);
// }

// // Method 2: for of - only works for Arrays and Strings
// for(let f of fruit){
//     console.log('Method for of' + f)
//}

const person = {
    firstname: 'John',
    lastname: 'Smith',
    age: 30
};

const student = Object.create(person);
student.grade = 'A';
for(let i in student){
    if(student.hasOwnProperty(i)){
        console.log(`My own property: ${i}, ${student[i]}`)
    }
    else{
    console.log('inherited from parent ',i + ':', student[i]);
}
}

//using .hasOwnProperty


