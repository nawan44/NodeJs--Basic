const http = require("http")
const server = http.createServer((req,res) => {
	res.write(JSON.stringify({ hello : "world" }));
	res.send();
});
server.listen(5000, () => {
	console.log("run on port 5000");
});
