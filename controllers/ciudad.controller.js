var Ciudad = require('../models/encuestas.server.ciudad.js');

exports.create = function(req, res){
	var ciudad = req.body; 
	var nciudad = new Ciudad(ciudad);

	nciudad.save(function(err, ciudad,affected){
		res.json(err||ciudad);
	});
};


//find all 
exports.findAll = function(req, res){
	Ciudad.find({},function(err, ciudades){
		res.json(err||ciudades);
	});
};

//find by id
exports.findById = function(req, res){
	Ciudad.findById(req.params['id'],function(err, ciudad){
		res.json(err||ciudad||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	Ciudad.findByIdAndRemove(req.params['id'],function(err, ciudad){
		res.json(err||ciudad||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	Ciudad.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};