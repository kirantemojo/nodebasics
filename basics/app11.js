var httpUtil = require('http');
var file = require('fs');
var util = require('url');

var appConfig = {
	staticpath:__dirname
};

var handleFiles =  (function(req,res){
	var url = util.parse(req.url);
	var path = appConfig.staticpath+url.pathname;
	file.exists(path,function(exists){
		if(exists)
		{
			file.readFile(path,function(err,data)
			{
				if(err) throw err;
				res.end(data);
			});
		}
		else
		{
			res.statusCode = 404;
			res.end("404 File not Found");
		}
	});
})

httpUtil.createServer(function(req,res){
	handleFiles(req,res);
}).listen(3000);