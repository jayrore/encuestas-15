var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var coloniaSchema = new Schema({
    "code" : String,
    "poblacion" : String,
    "municipio" : String,
    "cp" : String
});
module.exports = module.exports = mongoose.model('suburb', coloniaSchema);