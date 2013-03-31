var httpUtil = require('http');
var file = require('fs');
var util = require('url');

var appConfig = {
	staticpath:__dirname
};

var handleFiles =  (function(req,res,next){
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
			next(null);
		}
	});
})

httpUtil.createServer(function(req,res){
	handleFiles(req,res,function(err){
		if(err) throw err;
		res.statusCode = 404;
		res.end("404 File Not found");
	});
}).listen(3000);