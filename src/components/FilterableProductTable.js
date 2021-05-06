import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar products={this.props.products}/>
        <ProductTable products={this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;
