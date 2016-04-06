module.exports = {
	entry : "./public/js/dev/entry",
	output: {
		path:__dirname+'/public/js/assets/',
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{ test:/\.css$/,loader:"style!css"},
			{ test: /\.jsx?$/, loaders: ['jsx?harmony']},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		]
	},
	resolve:{
		extensions:['','.js','.jsx']
	}
};