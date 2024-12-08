import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'; // Directly using axios here

const DeleteProduct = ({ id, refreshProducts }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:8000/api/products/${id}`);
        alert('Product deleted successfully!');
        refreshProducts(); // Refresh the product list
      } catch (error) {
        console.error(error);
        alert('Failed to delete product.');
      }
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteProduct;
