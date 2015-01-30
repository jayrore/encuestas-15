var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var vehiculoSchema = new Schema({
    "code" : String,
    "description" : String
});
module.exports = module.exports = mongoose.model('vehicle', vehiculoSchema);;