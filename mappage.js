//mappage.js


var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
//var d = new Date(1-12-2018);


app.set('view engine', 'html');
app.engine('html', hbs.__express);

//Original Message

app.get('/', function(req, res) {
	var searches = JSON.parse(
		fs.readFileSync('mappage.json', 'utf8')
		);
		res.render(__dirname + '/mappage.html', {
		'welcomeMessage': 'Find Free Food Here'
	});
});

//Return Message from JSON

app.get('/message', function(req, res) {
	console.log(req.query);
	var searches = JSON.parse(
		fs.readFileSync('mappage.json', 'utf8'));
	searches.push(req.query);
	fs.writeFileSync('mappage.json', JSON.stringify(searches));
	res.redirect('/');
})

http.listen(3000, function() {
	console.log("listening on port 3000");
})