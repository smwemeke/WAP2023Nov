console.log('start');

new Promise((reject, resolve) => {
    const random = Math.random();
    console.log('Promise start...........' , random);
    if (random > 0.5) {
        resolve('Sucess');
    } else {
        reject('Whoops');
    }
    console.log('Promise end........');
}).then(result => console.log('Inside resolve: ' + result))
    .catch(error => console.log('Inside reject: ' + error))
    .finally(() => console.log('Inside finally.......'));

console.log('end');