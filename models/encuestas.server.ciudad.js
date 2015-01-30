var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ciudadSchema = new Schema({
    "id" : Number,
    "value" : String,
    "idLocacion" : Number,
    "label" : String,
    "locacion" : Number,
    "poblacion" : String,
    "id_estado" : Number,
    "estado" : String,
    "desc_estado" : String,
    "idInegi" : String,
    "latitud" : Number,
    "longitud" : Number
});
module.exports = module.exports = mongoose.model('city', ciudadSchema);;
