//home.js

var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
//var hover = document.getElementById("hover")


//test.addEventListener("mouseenter", function(event))

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
	res.render(__dirname + '/home.html', {
		'This is amazing' : 'hi'
	});
});

app.get('/postFood', function (req, res) {
	res.render(__dirname + '/post-food.html');
});

app.get('/information', function(req, res) {
	allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
	allSubmissions.push(req.query);
	fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
	res.render(__dirname + '/thank_you.html');

})

http.listen(3000, function() {
	console.log("listening on port 3000");
})
