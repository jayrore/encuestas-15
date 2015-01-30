var express = require('express');
var router = express.Router();
var paquete = require('../controllers/paquete.controller');

//Insert paquete
router.post('/', function(req, res){
	console.log("post");
  return paquete.create(req,res);
});

//find all
router.get('/', function(req, res){
  return paquete.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return paquete.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return paquete.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return paquete.updateById(req,res);
});


module.exports = router;