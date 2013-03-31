var express = require('express');
var app = express();

app.configure(function(){
	app.set('My Site','My Application');
});

app.configure('development',function(){
	app.set('db_uri','localhost:280017');
});

app.configure('production',function(){
	app.set('db_uri','0.0.0.0');
});

app.set('title', 'My Application');
 
if ('development' == app.get('env')) {
  app.set('db uri', 'localhost/dev');
}

if ('production' == app.get('env')) {
  app.set('db uri', 'n.n.n.n/prod');
}