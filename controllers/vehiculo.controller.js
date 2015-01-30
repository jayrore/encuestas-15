var Vehiculo = require('../models/encuestas.server.vehiculo.js');

exports.create = function(req, res){
	var vehiculo = req.body; 
	var nVehiculo = new Vehiculo(vehiculo);

	nVehiculo.save(function(err, vehiculo,affected){
		console.log("vehiculo");
		res.json(err||vehiculo);
	});
};

//find all 
exports.findAll = function(req, res){
	Vehiculo.find({},function(err, vehiculos){
		res.json(err||vehiculos);
	});
};

//find by id
exports.findById = function(req, res){
	Vehiculo.findById(req.params['id'],function(err, vehiculo){
		res.json(err||vehiculo||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	Vehiculo.findByIdAndRemove(req.params['id'],function(err, vehiculo){
		res.json(err||vehiculo||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	Vehiculo.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};