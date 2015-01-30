var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var paqueteSchema = new Schema({
    "estacion" : String,
    "carretera" : String,
    "km" : String
});
module.exports = module.exports = mongoose.model('pack', paqueteSchema);;