import React from 'react';

class ProductRow extends React.Component {
    render() {
      const productsName = this.props.product.map((product,index)=>{return (<tr key={index}>{product.name}</tr>)})
      const productsPrice = this.props.product.map((product,index)=>{return (<tr key={index}>{product.price}</tr>)})
    return (
      <div>
        <th>
        {productsName}
        </th>
        <th>
        {productsPrice}
        </th>
      </div>
    );
  }
}

export default ProductRow;
