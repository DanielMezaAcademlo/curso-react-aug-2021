import React from "react";

//Bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";
//React router
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">JSON API</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
        </Nav>
        <Nav className="me-auto">
          <Link to="/profile">Profile</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
