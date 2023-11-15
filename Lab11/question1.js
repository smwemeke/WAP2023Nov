
const dns = require('dns');
const result = dns.lookup('www.miu.edu', function (error, address, family){
    console.log(address);
});

const result2 = dns.resolve4('www.baylor-uganda.org', (err, ipaddress, family) =>{
    console.log(ipaddress);
});

const result3 = dns.resolve('www.mujhu.org', (err, add, family) =>{
    console.log(add);
});