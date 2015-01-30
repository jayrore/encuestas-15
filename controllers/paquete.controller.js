var Paquete = require('../models/encuestas.server.paquete.js');

exports.create = function(req, res){
	var paquete = req.body; 
	var nPaquete = new Paquete(paquete);

	nPaquete.save(function(err, paquete,affected){
		res.json(err||paquete);
	});
};


//find all 
exports.findAll = function(req, res){
	Paquete.find({},function(err, paquetes){
		res.json(err||paquetes);
	});
};

//find by id
exports.findById = function(req, res){
	Paquete.findById(req.params['id'],function(err, paquete){
		res.json(err||paquete||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	Paquete.findByIdAndRemove(req.params['id'],function(err, paquete){
		res.json(err||paquete||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	Paquete.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};