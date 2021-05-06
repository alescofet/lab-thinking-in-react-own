import React from 'react';
import ProductRow from './ProductRow';
class ProductTable extends React.Component {
  render() {
    return (
      <table className="productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow product={this.props.products} />
      </table>
    );
  }
}

export default ProductTable;
