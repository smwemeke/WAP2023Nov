
// No.1
console.log('Lab 5 N0.1')
function sum(arr){
    let sum =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i] > 20){  
        sum+=arr[i];
    }
}
    return sum;
 } 
 const sumArray = [23,2,5,1,24];
 const res = sum(sumArray);
 console.log('Sum of elements greater that 20: ' + res);


 //No.2
console.log('Lab 5 N0.2')
 const getNewArray = function(strArr){
    const newArr = strArr.filter(function(str){
        return str.length >=5 && str.includes('a');
    });
    return newArr;
        } ;   
 const finalArr = [ 'damian','alvin', 'aaron','suzan'];
 console.log(getNewArray(finalArr));

 //N0.3
 console.log('Lab 5 N0.3')

 let concat = (...args) => {
    return args.reduce((arr, arg) =>{
        if (typeof arg === 'string'){
            arr.push(...arg);
        }
        else if (Array.isArray(arg)){
            arr.push(...arg);
        }
        return arr;
    }, []);
 }
 console.log(concat('hi', [1,2,3], ['Hello','world']));