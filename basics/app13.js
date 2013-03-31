var connect = require('connect');

var appConfig = { 
	staticPath: __dirname
};

var app = connect().use(connect.static(appConfig.staticPath))
	.use(function(req,res,next){
		res.statusCode = 404;
		res.end("File not found");
	}).listen(3000);