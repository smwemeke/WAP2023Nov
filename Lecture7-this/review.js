function foo(num1, num2){
    console.log(this, num1, num2);
}

// Arrow function
const f = () => {
    console.log(this);
}

// Ways to invoke a function

// Method 1
foo(); // this===window

// Method 2:  Using call

// when we use call or apply, changes this keyword to be something else
// the value of the first parameter
// in the call function is always the value of this keyword in the function before the dot
// except if the value is null, undefined and the function is an arrow function
// in call, the remaining values you pass as parameters are going to be the values in the function
foo.call('abc');

// except if the value is null, undefined and the function is an arrow function e.g
//f.call('a'); // this === window

//Method 3: Using apply
foo.apply(undefined); // this === window

f.apply('a',[]); // this === window


foo.apply([], [3,6,8]);

//bind doesnot invoke a function
// Why bind(), you want to change this keyword in the function before dot to be something else
// when we call bind(), it will return another function

const res = foo.bind('4');
res(2,3);

