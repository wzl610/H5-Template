var settings = require('../settings'),
	Db = require('mongodb').Db,
	Connection = require('mongodb').Connection,
	Server = require('mongodb').Server;
	module.exports = new Db(settings.db,newServer(settings.host,settings.port),{safe : true});