var assert = require("assert");
var util = require('util');
var a = "a", b = "a", c = "c";
try
{
	assert.deepEqual(a,a,"This is a ");
	assert.notDeepEqual(a,c,"This is b ");
	assert.strictEqual(a,c,"This is strict");
	assert.notStrictEqual(a,a,"This is not Strict");
}
catch(err)
{
	util.inspect(err);	
	if(err['name'] == "AssertionError")
	{
		console.log("Message:"+err["message"]);
		console.log("Actual:"+err["actual"]);
		console.log("Expected:"+err["expected"]);
		console.log("Operator:"+err["operator"]);
	}
}