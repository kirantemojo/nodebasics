Array.prototype.remove = function(from,to)
{
	var rest = this.slice((from || to) +1|| this.length);
	console.log(rest);
}
var socket = ["1","2","3","4"];
socket.remove(0,0);
socket.remove(1);
socket.remove(0,1);
socket.remove(1,0);