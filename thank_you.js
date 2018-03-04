//thank_you.js


var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
  res.render(__dirname + '/thank_you.html', {
		'thankYou': 'SUBMISSION ACCEPTED'
});
});



http.listen(3000, function() {
	console.log("listening on port 3000");
})