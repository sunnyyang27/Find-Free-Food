//home.js


var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
//var hover = document.getElementById("hover")


//test.addEventListener("mouseenter", function(event))


app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function (req, res) {
  res.render(__dirname + '/home.html', {
		'This is amazing' : 'hi'
});
});



http.listen(3000, function() {
	console.log("listening on port 3000");
})