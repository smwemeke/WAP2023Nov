// let phrase = 'Hello';
// if (true){
// var user = 'John';
// var x = function foo(){
//     console.log('Sue');
// }
// }
// console.log(x);
// console.log(`${phrase}, ${user}`);


// for (let i = 0; i < 10; i++) {
//     console.log('i' + i);
//     }
//     console.log('outer ' + i);


function f(){
    function f2(){
        var username = 'John';
        console.log(username);
    }
    f2();
}
f();
//console.log(username);