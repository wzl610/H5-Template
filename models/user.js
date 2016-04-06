var mongo = require('./db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username : String,
	password:String
});

var User = mongo.model('User',userSchema);

module.exports = User;