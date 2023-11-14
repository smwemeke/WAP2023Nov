let x = 1
function foo(){
    let x =2;
    bar();
    function bar(m,n){
    console.log( 'Ans1:' + x,i,m,n);
}
for (var i =5; i<7;i++){
    console.log('Ans2: ' + i);
}
bar(100);
baz();
}
function baz(){
    console.log(x);
}
foo();