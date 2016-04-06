var React = require('react');
var ReactDOM = require('react-dom');
var CommentList = require('./comment').CommentList,CommentForm = require('./comment').CommentForm;
var datas = [
	{
		'author' : 'Allen',
		'text' : 'hello wrodld'
	},
	{
		'author' : 'May',
		'text' : 'I am a new comment'
	}
];      
var CommentBox = React.createClass({
	getInitialState : function(){
		return {data : []};
	},
	componentDidMount:function(){
		$.getJSON('/comment.json',function(data){
			this.setState({data:data});
		});
	},
	render : function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content') //不要加分号！！！
);
 