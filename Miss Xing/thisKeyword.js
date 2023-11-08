// 'use strict';
// console.log(this);
// console.log(this === window);
//  var x = 10;
// console.log(this.x);

// function foo(){
//     console.log(this);
// }
// foo();

///
// console.log('------Calling / Invoking Functions------');

// function foo(arg1, arg2){
//     console.log(`this keyword: `, this);
//     console.log(arg1,arg2);
// }
// console.log('Method 1');
// foo('a','b');

// console.log('Method 2 using call');
// foo.call('Hello', 'a', 'b');

// console.log('Method 3 using apply');
// foo.apply('Hello', ['a','b']);

// console.log('Method 3 using bind');
// foo.bind('Hello')('a','b');

const user = {
    firstName : 'Sue',
    lastName : 'Mwemeke',
    printName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
user.printName();


console.log('----------Call and apply Demos--------');
const user2 = {
    firstName: 'Alvin',
    lastName: "Aaron"
}

console.log('Invoke using call');
user.printName.call(user2);


console.log('Invoke using apply');
user.printName.apply(user2);

console.log('Invoke using apply');
user.printName.bind(user2)();



console.log('---- Arrow function-----');
