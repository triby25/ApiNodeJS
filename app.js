var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose = require('mongoose');

//parsear body del request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/api/carro', require('./route/carro.routes'));

app.get('/', function(req, res){
	return res.status(200).json({'menssage' : 'hola api'});
});

///localhost:8080
app.listen(8080, function(err){
	if(err)
		console.log('error: ' + err);

	console.log('el sevidor esta corriendo por el puero 8080');
});

//MONGO CONFIG
mongoose.connect('mongodb://localhost/apirest');

mongoose.connection.on('open', function(err){
	if(err)
		console.log('error: ' + err);

	console.log('mongodb esta arriba');
});

mongoose.connection.on('error', function(err){
	console.log('hay un error: ' + err);	
});
 
