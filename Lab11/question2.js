const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request',(req, res) => {
    const src = fs.createReadStream('./image1.png').pipe(res);

});
server.listen(3000, () => console.log('listening on 3000'));