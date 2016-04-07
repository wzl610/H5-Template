var React = require('react');
var SearchBar = React.createClass({
	render : function(){
		return (
			<form>
			<input type="text" placeholder = "Search.." />
			<input type="checkbox" />
			Only show products in stock
			</form>
		);
	}
});

var ProductRow = React.createClass({
	render : function(){
		var product = this.props.product;
		var name = product.stocked?product.name:<span style={{color:'red'}}>{product.name}</span>;
		return (
			<p>
			<span>{name}</span>
			<span>{product.price}</span>
			</p>
		);
	}
});

var ProductCategoryRow = React.createClass({
	render : function(){
		return (
			<h1>{this.props.name}</h1>
		);
	}
});

var ProductTable = React.createClass({
	render:function(){
		var rowArray = [],lastCatory;
		this.props.data.forEach(function(item){
			if(item.category!==lastCatory){
				rowArray.push(<ProductCategoryRow name={item.category}/>);
			}
			rowArray.push(<ProductRow product = {item}/>);
			lastCatory = item.category;
		});
		return (
			<div>
			{rowArray}
			</div>
		);
	}
});

var FilterableProductTable = React.createClass({
	render : function(){
		return (
			<div>
			<SearchBar />
			<div><span>Name</span><span>Price</span></div>
			<ProductTable data={this.props.products}/>
			</div>
		);
	}
});

module.exports.FilterableProductTable = FilterableProductTable;
