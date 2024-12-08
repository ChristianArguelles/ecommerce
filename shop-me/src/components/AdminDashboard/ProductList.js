import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Modal, Spinner, Table } from 'react-bootstrap';
import DeleteProduct from './DeleteProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for adding to cart
  const [quantity, setQuantity] = useState(1); // Quantity state

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch products.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setQuantity(1); // Reset quantity when closing modal
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      // Implement your add to cart logic here
      console.log(`Adding ${quantity} of ${selectedProduct.description} to cart.`);
      // You can also call an API to handle the cart logic here

      // Close the modal after adding to cart
      handleCloseModal();
    }
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.barcode}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <Button
                  variant="warning"
                  href={`/edit-product/${product.id}`}
                  className="me-2"
                >
                  Edit
                </Button>
                {/* Add To Cart Button */}
                <Button
                  variant="success"
                  onClick={() => handleShowModal(product)}
                >
                  Add to Cart
                </Button>
                <DeleteProduct id={product.id} refreshProducts={fetchProducts} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Quantity Input */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <p>Adding: {selectedProduct.description}</p>
              <Form.Group controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>
  );
};

export default ProductList;