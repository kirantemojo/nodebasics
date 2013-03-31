Array.prototype.remove = function(from,to)
{
	var rest = this.slice((from || to) +1|| this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this,rest);
}
var net = require('net');
var sockets = [];	
net.createServer(function(socket){
	sockets.push(socket);
	socket.write("Hello");
	socket.write("World");
	socket.on("data",function(data){
		var i;
		for(i=0;i<sockets.length;i++)
		{
			if(sockets[i] === socket) continue;
			sockets[i].write(data.toString());
		}
	});
	socket.on("end",function(){
		var i = sockets.indexOf(socket);
		sockets.remove(i);
	});
}).listen(3000);

