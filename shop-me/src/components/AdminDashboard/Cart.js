// src/components/Cart.jsx
import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Proceeding to checkout!');
    navigate('/checkout'); // Navigate to your checkout page
  };

  return (
    <Container className="mt-5">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;