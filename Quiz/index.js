const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    const html = fs.readFileSync("./index.html", "utf-8");
    res.end(html);
    //fs.createReadStream('./index.html').pipe(res);
}).listen(8000, () => console.log('listening on 8000'));