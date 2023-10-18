 import React, { Component } from 'react';

class Prod extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: 'Product 1', price: 10, quantity: 5 },
        { id: 2, name: 'Product 2', price: 15, quantity: 3 },
        { id: 3, name: 'Product 3', price: 8, quantity: 7 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Product Sales</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Prod;
