import React from 'react';
import ProductRow from './ProductRow';
class ProductTable extends React.Component {
  render() {
    
      return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <ProductRow product={this.props.products}/>
        </table>
      );
    };
  }

export default ProductTable;