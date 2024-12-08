// src/App.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProduct from './components/AdminDashboard/AddProduct';
import AdminNavbar from './components/AdminDashboard/AdminNavbar';
import Cart from './components/AdminDashboard/Cart'; // Import Cart component
import EditProduct from './components/AdminDashboard/EditProduct';
import ProductList from './components/AdminDashboard/ProductList';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import { CartProvider } from './components/context/CartContext'; // Import CartProvider

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap with CartProvider */}
        <div>
          <AdminNavbar />
          <Container className="mt-3">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/" element={<ProductList />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/cart" element={<Cart />} /> {/* New Route for Cart */}
            </Routes>
          </Container>
        </div>
      </CartProvider> 
    </Router>
  );
}

export default App;