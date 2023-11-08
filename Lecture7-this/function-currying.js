function f(a,b,x){
    return a*x+b;
}
// conversion of degrees to farahneit

const c1 = 9/5 * 20 + 32;
const c2 = 9/5 * 30 + 32;


//To avoid repeatition, we do function currying - ()

const cToF = f.bind(null, 9/5,32);

console.log(cToF(20));