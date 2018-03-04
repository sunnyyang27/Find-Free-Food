//home.js

var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
var temp;

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
	res.render(__dirname + '/home.html');
});

app.get('/post-food', function (req, res) {
	res.render(__dirname + '/post-food.html');
});

app.get('/find-food', function(req, res) {
	res.render(__dirname + '/mappage.html', {
		'welcomeMessage': 'Find Free Food Here'
	});
});

app.get('/information', function(req, res) {
	allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
	allSubmissions.push(req.query);
	fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
	res.render(__dirname + '/thank_you.html');
});

app.get('/geocoding', function(req, res) {
	allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
	console.log("Geocoded: " + req.query.location);
	temp.location = req.query.location;
	allSubmissions.push(req.query);
	fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
	res.render(__dirname + '/thank_you.html');
});

app.get('/home', function(req, res) {
	res.render(__dirname + '/home.html');
});

http.listen(3000, function() {
	console.log("listening on port 3000");
})
