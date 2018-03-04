var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
var date = Date();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function(req, res) {
	//var messages = JSON.parse(fs.readFileSync('messages.json', 'utf8'));
	//console.log(messages);
	res.render(__dirname + '/post-food.html', { 
		headerMessage: "Submit Free Food", eventMessage: "Event Information"
	});
});

app.get('/information', function(req, res) {
	//console.log(req.query);
	//res.status(200).redirect('/');
	allSubmissions = JSON.parse(fs.readFileSync('submissions.json', 'utf8'));
	allSubmissions.push(req.query);
	fs.writeFileSync('submissions.json', JSON.stringify(allSubmissions));
	res.render(__dirname + '/submitted.html');
})

app.get('/back', function(req, res) {
	res.render(__dirname + '/post-food.html', { 
		headerMessage: "Submit Free Food", eventMessage: "Event Information"
	});
})

app.get('/error', function(req, res) {
	res.render(__dirname + '/post-food.html', { 
		headerMessage: "Error" 
	});
})

http.listen(3001, function() {
	console.log("Listening on port 3001");
})
