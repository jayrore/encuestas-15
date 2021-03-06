var express = require('express');
var router = express.Router();
var user = require('../controllers/user.controller');

//Insert 
router.post('/', function(req, res){
  return user.create(req,res);
});

//find all
router.get('/', function(req, res){
  return user.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return user.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return user.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return user.updateById(req,res);
});

module.exports = router;
