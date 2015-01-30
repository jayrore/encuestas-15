var Cargo = require('../models/encuestas.server.cargo.js');

exports.create = function(req, res){
	var cargo = req.body; 
	var nCargo = new Cargo(cargo);

	nCargo.save(function(err, cargo,affected){
		res.json(err||cargo);
	});
};

//find all 
exports.findAll = function(req, res){
	Cargo.find({},function(err, cargos){
		res.json(err||cargos);
	});
};

//find by id
exports.findById = function(req, res){
	Cargo.findById(req.params['id'],function(err, cargo){
		res.json(err||cargo||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	Cargo.findByIdAndRemove(req.params['id'],function(err, cargo){
		res.json(err||cargo||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	Cargo.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};