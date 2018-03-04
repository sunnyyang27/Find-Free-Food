//home.js

var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
//var allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
var temp;
//var hover = document.getElementById("hover")


//test.addEventListener("mouseenter", function(event))

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
	res.render(__dirname + '/home.html');
});

app.get('/post-food', function (req, res) {
	res.render(__dirname + '/post-food.html');
});

app.get('/find-food', function(req, res) {
	res.render(__dirname + '/mappage.html');
});

app.get('/information', function(req, res) {
	console.log(req.query);
	allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
	allSubmissions.push(req.query);
	fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
	//geocodedAddr = JSON.parse(fs.readFileSync('geocoding.json', 'utf8'));
	//allSubmissions.push(req.query);
	//fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
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
