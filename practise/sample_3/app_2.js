var assert = require('assert');
assert.throws(function(){
	throw new Error("Wrong Value");
},function(err){
	if(err instanceof Error)
	{
		console.log("This is the error :"+err["message"]);
		return true;
	}
},"Hi i'm Error");