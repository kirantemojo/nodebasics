var fs = require("fs");
function conf()
{
	var config = JSON.parse(fs.readFileSync('config.json'));
	var host = config.host;
	var port = config.port;
	console.log(host+' '+port);
}
module.exports.con = conf;

