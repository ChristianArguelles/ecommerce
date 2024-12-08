import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'; // React-Bootstrap for layout

// Import components from the correct paths based on your folder structure
import AdminNavbar from './components/AdminDashboard/AdminNavbar'; 
import ProductList from './components/AdminDashboard/ProductList';
import AddProduct from './components/AdminDashboard/AddProduct';
import EditProduct from './components/AdminDashboard/EditProduct';
import Login from './components/Login/Login';  // Login page
import Registration from './components/Registration/Registration';  // Registration page

function App() {
  return (
    <Router>
      <div>
        {/* Admin Navbar - shown only for Admin */}
        <AdminNavbar />

        {/* Container for routing */}
        <Container>
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Registration Route */}
            <Route path="/register" element={<Registration />} />

            {/* Admin Routes */}
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
