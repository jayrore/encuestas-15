var express = require('express');
var router = express.Router();
var colonia = require('../controllers/colonia.controller');

//fecth array de usuarios
router.post('/', function(req, res){
	console.log("colonia");
  return colonia.create(req,res);
});

//find all
router.get('/', function(req, res){
  return colonia.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return colonia.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return colonia.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return colonia.updateById(req,res);
});

module.exports = router;
