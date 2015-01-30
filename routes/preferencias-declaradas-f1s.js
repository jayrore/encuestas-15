var express = require('express');
var router = express.Router();
var pdsF1 = require('../controllers/preferencias-declaradas-formato1.controller');

//Insert orige-y-destino-formato1
router.post('/', function(req, res){
  return pdsF1.create(req,res);
});

//find all
router.get('/', function(req, res){
  return pdsF1.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return pdsF1.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return pdsF1.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return pdsF1.updateById(req,res);
});

module.exports = router;
