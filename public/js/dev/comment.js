var React = require('react');
var CommentList = React.createClass({
	render : function(){
		var commentNodes = this.props.data.map(function(comment){
			return(
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render : function(){
		return (
			<div className = "CommentForm">
				hello , I am a CommentForm
			</div>
		);
	}
});

var Comment = React.createClass({
	render : function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});

module.exports.CommentList = CommentList;
module.exports.CommentForm = CommentForm;
module.exports.Comment = Comment;