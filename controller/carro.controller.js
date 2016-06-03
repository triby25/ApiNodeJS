var Carro = require('../model/carro');

exports.getAll = function(req, res){
	Carro.find({}, function(err, carros){
		if(err)
			res.status(403).json({'message' : err});

		res.status(200).json(carros);
	});
};

exports.get = function(req, res){
	Carro.findById(req.params.id, function(err, carro){
		if(err)
			res.status(403).json({'message' : err});

		res.status(200).json(carro);
	});
};

exports.create = function(req, res){
	if(!req.body){
		res.status(403).json({'message' : 'debe especificar el cuerpo'});
	}

	Carro.create(req.body, function(err){
		if(err)
			res.status(403).json({'message' : err});

		res.status(200).send('OK');
	});
};

exports.update = function(req, res) {
	Carro.findByIdAndUpdate(req.params.id, req.body, { upset : true } , function(err){
		if(err)
			res.status(403).json({'message' : err});

		res.status(200).send('OK');
	});
};

exports.delete = function(req, res) {
	Carro.remove({ _id : req.params.id }, function(err){
		if(err)
			res.status(403).json({'message' : err});

		res.status(200).send('OK');
	});
};
