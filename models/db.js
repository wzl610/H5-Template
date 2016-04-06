var settings = require('../settings'),
 	mongoose = require('mongoose'),
 	opts = { server: { auto_reconnect: false }, user: settings.user, pass: settings.pwd };
	module.exports = mongoose.createConnection('localhost', settings.db, settings.port, opts)
