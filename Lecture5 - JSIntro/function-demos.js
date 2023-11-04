// Method 1: Function Declaration
//Steps:  use keyword function and give it name
function square(number){
    return number * number;
}
const result =square(5); // in js no void
console.log(result);

// Methos2: Function Expression
// is a value
const sum1 = function(num1, num2){
    return num1 + num2;
}
console.log(sum1(3,7));

// Anonymous Function
window.onload = function(){
    alert('Surprise');
}

//Method 4: Arrow Function
 const subtract = (num1, num2) => {
    return num1 - num2;
 }
 console.log(subtract(20, 4))


