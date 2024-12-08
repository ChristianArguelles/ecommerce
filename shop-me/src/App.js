import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Import components
import AddProduct from './components/AdminDashboard/AddProduct';
import AdminNavbar from './components/AdminDashboard/AdminNavbar';
import EditProduct from './components/AdminDashboard/EditProduct';
import ProductList from './components/AdminDashboard/ProductList';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <Router>
      <div>
        <AdminNavbar />

        <Container className="mt-3">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
