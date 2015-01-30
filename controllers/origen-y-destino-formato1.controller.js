var OdsFormato1 = require('../models/encuestas.server.origen-y-destino-formato1.js');

exports.create = function(req, res){
	var odsF1 = req.body;
	var nOdsF1 = new OdsFormato1(odsF1);

	nOdsF1.save(function(err, odsF1,affected){
		res.json(err||odsF1);
	});
};
//find all 
exports.findAll = function(req, res){
	OdsFormato1.find({"rubro" : "ods"},function(err, odsF1s){
		res.json(err||odsF1s);
	});
};

//find by id
exports.findById = function(req, res){
	OdsFormato1.findById(req.params['id'],function(err, odsF1){
		res.json(err||odsF1||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	OdsFormato1.findByIdAndRemove(req.params['id'],function(err, odsF1){
		res.json(err||odsF1||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	OdsFormato1.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};