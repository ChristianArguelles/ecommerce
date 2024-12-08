// src/components/AdminDashboard/AdminNavbar.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/admin">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/add-product" className={({ isActive }) => (isActive ? 'active' : '')}>Add Product</Nav.Link>
            <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active' : '')}>View Products</Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>View Cart</Nav.Link> {/* New Link */}
            <Nav.Link as={NavLink} to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;