var Colonia = require('../models/encuestas.server.colonia.js');

exports.create = function(req, res){
	var colonia = req.body; 
	var nColonia = new Colonia(colonia);

	nColonia.save(function(err, colonia,affected){
		res.json(err||colonia);
	});
};


//find all 
exports.findAll = function(req, res){
	Colonia.find({},function(err, colonias){
		res.json(err||colonias);
	});
};

//find by id
exports.findById = function(req, res){
	Colonia.findById(req.params['id'],function(err, colonia){
		res.json(err||colonia||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	Colonia.findByIdAndRemove(req.params['id'],function(err, colonia){
		res.json(err||colonia||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	Colonia.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};