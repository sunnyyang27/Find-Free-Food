var express = require('express');
//var app = require('express')();
var path = require('path');
var app = express();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
//var d = new Date(1-12-2018);

var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'html');
app.engine('html', hbs.__express);

//Original Message
app.get('/', function(req, res) {
		res.render(__dirname + '/mappage.html', {
		'welcomeMessage': 'Find Free Food Here'
	});
});
http.listen(3000, function() {
	console.log("listening on port 3000");
})
