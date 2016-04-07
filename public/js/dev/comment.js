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
	handleSubmit: function(){
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		if(!text || author){
			return;
		}
		this.refs.author.value = '';
		this.refs.text.value='';
		return;
	},
	render : function(){
		return (
			<div className = "CommentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Your name" ref="author"/>
				<input type="text" placeholder="Say something..." ref="text"/>
				<input type="submit" value="Post"/>
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