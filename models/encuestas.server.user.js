var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var m = /[a-zA-Z]/;
var userSchema = new Schema({
    "name" : { type: String, required: true, match: m},
    "lastNameFather" : String,
    "lastNameMother" : String,
    "pass" : String,
    "authLevel" : String
});
module.exports = mongoose.model('user', userSchema);