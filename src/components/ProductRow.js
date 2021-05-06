import React from 'react';

class ProductRow extends React.Component {
    render() {
      const products = this.props.product.map((product,index)=>{return (<tr><td key={index}>{product.name}</td> <td key={index}>{product.price}</td></tr>)})
     /*  const productsPrice = this.props.product.map((product,index)=>{return ()}) */
    return (
      <tbody>
        {products}
      </tbody>
    );
  }
}

export default ProductRow;
