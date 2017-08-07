var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');


var app = express();

var SHAMSUR = process.env.SHAMSUR || 8080;

app.use(express.static('app/public/'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.text());

app.use(bodyParser.json({type:'application/vnd.api+json'}));


require('./app/routing/api-routes.js')(app);

require('./app/routing/html-routes.js')(app); 


app.listen(SHAMSUR, function() {
	
	console.log("App listening on :" + SHAMSUR);
});