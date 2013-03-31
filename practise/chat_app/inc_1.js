var express = require('express');
var socketio = require('socket.io');
 
 var appConfig = {
	staticPath:__dirname	
 };
 
 var app = express();
 var server = require('http').createServer(app);
 var io = socketio.listen(server);
 
 app.use(express.static(appConfig.staticPath));
 app.use(function(req,res,next){
	res.send(404,"File not Found");
 });
 
 io.sockets.on('connection',function(socket){
	socket.emit('news',{hello:'kiran'});
	socket.on('my other event',function(data){
		console.log(data.my);
	});
 });
 server.listen(8000);