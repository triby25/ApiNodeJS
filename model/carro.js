var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
	marca : { type : String },
	modelo : String,
	colores : []
});

module.exports = mongoose.model('Carro', carSchema);
