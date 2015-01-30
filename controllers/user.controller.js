var User = require('../models/encuestas.server.user.js');

//insert 
exports.create = function(req, res){
	var user = req.body; 
	var nUser = new User(user);

	nUser.save(function(err, user,affected){
		res.json(err||user);
	});
};

//find all 
exports.findAll = function(req, res){
	User.find({},function(err, users){
		res.json(err||users);
	});
};

//find by id
exports.findById = function(req, res){
	User.findById(req.params['id'],function(err, user){
		res.json(err||user||"not found");
	});
};

//delete by id
exports.deleteById = function(req, res){
	User.findByIdAndRemove(req.params['id'],function(err, user){
		res.json(err||user||"not found");
	});
};

//update by id
exports.updateById = function(req, res){
     var update = req.body;
	User.findByIdAndUpdate(req.params['id'], update ,
		function(err, saved){
		console.log(req.body.pass);
		res.json(err|| saved || "Not found");
		}
	);
};