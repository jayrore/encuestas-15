var express = require('express');
var router = express.Router();
var cargo = require('../controllers/cargo.controller');

// Insert Cargos
router.post('/', function(req, res){
  return cargo.create(req,res);
});

//find all
router.get('/', function(req, res){
  return cargo.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return cargo.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return cargo.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return cargo.updateById(req,res);
});

module.exports = router;