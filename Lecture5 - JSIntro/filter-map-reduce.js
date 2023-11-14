function sum(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i] >20){
            sum += arr[i];
        }
    }
    return sum;
}
const newArr = [23,30,1];
console.log(sum(newArr));

////////////////////////////////////////////////////////////////////
const getNewArray = function(strArr){
    const res = strArr.filter((str) => str.length>=5 && str.includes('a'));
    return res;
}
const arr = ['derrick', 'oscar', 'julie', 'monica'];
console.log(getNewArray(arr));