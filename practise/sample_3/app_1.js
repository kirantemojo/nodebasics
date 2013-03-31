var assert = require('assert'),
	util = require('util'),
	tester_a = {"val":"a"},
	tester_b = {"val":"b"};

try
{
	/*
	assert.equal(tester_a.val,"a","This shouldn't be an error a");
	assert.equal(tester_b.val,"b","This shouldn't be an error b");
	
	assert.fail(tester_a.val,"a","This shouldn't be an error a","==");
	assert.fail(tester_b.val,"b","This shouldn't be an error b","==");
	*/
	
	assert.ok(tester_c.val,"This is a ");
	assert.ok(tester_b.val,"This is b ");
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