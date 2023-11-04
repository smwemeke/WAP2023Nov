// function sum(arr){
//     let sum =0;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i] > 20){  
//         sum+=arr[i];
//     }
// }
//     return sum;
//  } 
//  const sumArray = [23,2,5,1,24];
//  const res = sum(sumArray);
//  console.log('Sum:' + res);


 //N0.2

 const getNewArray = function(strArr){
    const newArr = strArr.filter(function(str){
        return str.length >=5 && str.includes('i');
    });
    return newArr;
        } ;   
 const finalArr = ['Alvin', 'Aaron', 'Damian','suzan'];
 console.log(getNewArray(finalArr));
