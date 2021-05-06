import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {

    state={
        products: this.props.products,
        productsFiltered: this.props.products
    }

    filterProduct(event){
    const {value} = event.target
    const filteredProducts = this.state.products.filter((product)=>{return product.name.includes(value)})
    this.setState({...this.state, productsFiltered: filteredProducts})
    }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filterFunction={(event)=>(this.filterProduct(event))}/>
        <ProductTable products={this.state.productsFiltered}/>
      </div>
    );
  }
}

export default FilterableProductTable;
