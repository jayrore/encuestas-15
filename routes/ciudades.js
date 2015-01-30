var express = require('express');
var router = express.Router();
var ciudad = require('../controllers/ciudad.controller');

//instert Ciudad
router.post('/', function(req, res){
  return ciudad.create(req,res);
});


//find all
router.get('/', function(req, res){
  return ciudad.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return ciudad.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return ciudad.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return ciudad.updateById(req,res);
});
module.exports = router;
