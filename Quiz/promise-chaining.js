console.log('start.....');

const obj = new Promise((resolve, reject) => {
    resolve(1);
}).then(data => data * 2).then (data => console.log('resolve', data)); // returns new promise(resolve = > resolve * 2)

console.log(obj);
console.log('end.....');