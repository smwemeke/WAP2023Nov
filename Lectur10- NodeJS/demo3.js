new Promise(resolve => resolve('Hi')).then(() => console.log('this is Promise.resove 1'));
process.nextTick(() => console.log('this is process.nextTick 1'));