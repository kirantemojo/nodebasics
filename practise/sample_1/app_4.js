var express = require('express');
var app = express();
app.use(function(req, res){
	app.use(express.logger());
	app.use(express.static(__dirname + '/public'));
  res.send('Hello');
});
app.listen(3000);