var UserModel = require('../models/user.js');
var CommentModel = require('../models/comment.js');
module.exports = function(app){
	app.get('/',function(req,res){
		res.render('login',{title:'allen'});
	});

	app.get('/login',function(req,res){
		//获取用户
		var username = req.body.username;
		UserModel.findOne({username:username},function(err,user){
			if(err){
				res.json({code:1,message:err});
			}else{
				res.json({code:0,data:user});
			}
		})
	});

	app.post('/reg',function(req,res){
		//添加用户
		var username = req.body.username,
			password = req.body.password;
			UserModel.find({username:username},function(err,user){
				if(err){
					res.json({code:1,message:err});
					return;
				}
				if(user){
					res.json({code:1,message:"已经存在此用户，请登录!"})
				}else{
					var newUser = new UserModel({
						username : username,
						password : password
					});
					newUser.save(function(err){
						if(err){
							res.json({code:1,message:err});
						}else{
							res.json({code:0});
							req.session.username = username;
							res.render('index',{'username':session.username});
						}
					})
				}
			});
	});

	app.put('/user:id',function(req,res){
		//修改用户
	});

	app.get('/react-demo',function(req,res){
		res.render('react-demo');
	});

	app.get('/comment',function(req,res){
		/*CommentModel.find(function(err,comment)){
			if(err){
				res.json({code:1,message:err});
				return;
			}else{
				res.json({code:0,data:comment});
			}
		}*/
		var data = require('../comment.json');
		res.json({code:0,data:data});
	});
	app.post('/comment',function(req,res){
		var newComment = new CommentModel({
			author : req.body.author,
			comment : req.body.comment
		});
		newComment.save(function(err){
			if(err){
				res.json({code:1,message:err});
			}else{
				res.json({code:0});
			}
		})
	});
};
