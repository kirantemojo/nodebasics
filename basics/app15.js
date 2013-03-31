var express = require('express');
var app = express();
var appConfig = {
	staticPath:__dirname
};
app.use(express.static(appConfig.staticPath));
app.use(function(req,res,next){
	res.send(404,"File not Found");
});

var server = app.listen(3000);