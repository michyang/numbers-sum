//index.js server


//express nodejs module
var express = require('express');
//set an instance of express
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//tell express what to do when / route is requested
app.get('/', function(request, response) {
		response.render('pages/index');

});

app.post('/', function(request, response){
		
			var num1 = new Number(request.body.num1);
			var num2 = new Number(request.body.num2);
		
			var result = new Number(num1 + num2).toFixed(5);
		
		response.write(result);
		response.end();
});

//wait for a connection
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
