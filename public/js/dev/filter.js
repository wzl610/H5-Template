var React = require('react');
var SearchBar = React.createClass({
	handleChange : function(){
		this.props.onUserChange(
			this.refs.filterTextInput.value,
			this.refs.onStockCheck.checked //ref只能引用到本身组件的，不能跨组件取
		);
	},
	render : function(){
		return (
			<form>
			<input type="text" placeholder = "Search.." value={this.props.filterText} onChange={this.handleChange} ref="filterTextInput"/>
			<input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleChange} ref="onStockCheck"/>
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
		var rowArray = [],lastCatory,
			filterText = this.props.filterText,
			inStockOnly = this.props.inStockOnly;
		this.props.data.forEach(function(item){
			if(item.name.indexOf(filterText) === -1 || (inStockOnly&&!item.stocked)){
				return;
			}
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
	getInitialState:function(){
		return {
			filterText : '',
			inStockOnly: false
		};
	},
	handleChange:function(inputValue,checkValue){
		this.setState({
			filterText : inputValue,
			inStockOnly : checkValue
		});
	},
	render : function(){
		return (
			<div>
			<SearchBar 
			filterText={this.state.filterText} 
			inStockOnly={this.state.inStockOnly}
			onUserChange = {this.handleChange}
			/>
			<div><span>Name</span><span>Price</span></div>
			<ProductTable 
			data={this.props.products}
			filterText={this.state.filterText} 
			inStockOnly={this.state.inStockOnly}
			/>
			</div>
		);
	}
});

module.exports.FilterableProductTable = FilterableProductTable;
