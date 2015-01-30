var PdsFormato1 = require('../models/encuestas.server.preferencias-declaradas-formato1.js');

exports.create = function(req, res){
	var pdsF1 = req.body; 
	var nPdsF1 = new PdsFormato1(pdsF1);

	nPdsF1.save(function(err, pdsF1,affected){
		res.json(err||pdsF1);
	});
};

//find all 
exports.findAll = function(req, res){
	PdsFormato1.find({"rubro" : "pds"},function(err, pdsF1s){
		res.json(err||pdsF1s);
	});
};

//find by id
exports.findById = function(req, res){
	PdsFormato1.findById(req.params['id'],function(err, pdsF1){
		res.json(err||pdsF1||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	PdsFormato1.findByIdAndRemove(req.params['id'],function(err, pdsF1){
		res.json(err||pdsF1||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	PdsFormato1.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};