require('http').createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("Hello World");
	//console.log("Server running at: 2000");
}).listen(2000);