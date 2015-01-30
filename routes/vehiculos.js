var express = require('express');
var router = express.Router();
var vehiculo = require('../controllers/vehiculo.controller');


//fecth array de usuarios
router.post('/', function(req, res){
  return vehiculo.create(req,res);
});

//find all
router.get('/', function(req, res){
  return vehiculo.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return vehiculo.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return vehiculo.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return vehiculo.updateById(req,res);
});



module.exports = router;
