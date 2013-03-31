require('fs').readFile("app1.js",function(err,data){
	if(err) throw err;
	console.log("File data:"+data.toString());
});
console.log("Hello Bhai");