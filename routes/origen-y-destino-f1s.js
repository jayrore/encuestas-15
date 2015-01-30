var express = require('express');
var router = express.Router();
var odsF1 = require('../controllers/origen-y-destino-formato1.controller');

//Insert orige-y-destino-formato1
router.post('/', function(req, res){
  return odsF1.create(req,res);
});


//find all
router.get('/', function(req, res){
  return odsF1.findAll(req,res);
});

//find by Id
router.get('/:id', function(req, res){
  return odsF1.findById(req,res);
});

//delete by Id
router.delete('/:id', function(req, res){
  return odsF1.deleteById(req,res);
});

//update by id
router.put('/:id', function(req, res){
	return odsF1.updateById(req,res);
});

module.exports = router;
