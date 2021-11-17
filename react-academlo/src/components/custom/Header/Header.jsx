import React, { useContext } from "react";
import { Link } from "react-router-dom";
//Bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";
import MovieContext from "../../../context/MovieContext";

const Header = () => {
  const { list } = useContext(MovieContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/movies">Movies ({list.length})</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
