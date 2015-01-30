var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var cargoSchema = new Schema({
    "code" : String,
    "description" : String
});
module.exports = module.exports = mongoose.model('cargo', cargoSchema);