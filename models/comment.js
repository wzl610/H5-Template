var mongo = require('./db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	author:String,
	comment:String
});

var Comment = mongo.model('Comment',commentSchema);

module.exports = Comment;