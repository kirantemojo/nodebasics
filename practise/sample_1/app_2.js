var express = require('express');
var app = express();
app.get('/',function(req,res){
	app.enable('trust proxy');
	console.log(app.get('trust proxy'));
	app.disable('trust proxy');
	console.log(app.get('trust proxy'));
});
app.listen(3000);