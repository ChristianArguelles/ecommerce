import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    barcode: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to generate a random barcode
  const generateRandomBarcode = () => {
    // Generate a random 12-digit number as a string
    const randomBarcode = Math.floor(100000000000 + Math.random() * 900000000000).toString();
    setFormData((prevData) => ({
      ...prevData,
      barcode: randomBarcode,
    }));
  };

  // Automatically generate a random barcode when the component mounts
  useEffect(() => {
    generateRandomBarcode();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:8000/api/products', formData);
      setSuccess(response.data.message || 'Product added successfully!');
      setFormData({
        barcode: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
      });
      // Generate a new barcode for the next product
      generateRandomBarcode();
    } catch (error) {
      if (error.response && error.response.data) {
        // Handle validation errors from Laravel API
        setError(error.response.data.message || 'Failed to add product.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>Add Product</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Barcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter barcode"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
            readOnly // Make the barcode field read-only
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;