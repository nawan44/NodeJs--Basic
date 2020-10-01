var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello<i>World</i>!');
    res.end();
}).listen(8080);

console.log("server running on http://localhost:8080");
