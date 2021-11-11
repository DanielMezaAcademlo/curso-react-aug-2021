import React, { useContext } from "react";
//Router
import { Link } from "react-router-dom";

//Context
import TeamContext from "../context/TeamContext";
//Components
import { Navbar, Container, Nav, Badge } from "react-bootstrap";

const Header = () => {
  const { team } = useContext(TeamContext);
  const bgColor =
    team.length < 3
      ? "danger"
      : team.length >= 3 && team.length < 6
      ? "warning"
      : "success";

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Poke API</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/team">
              <Nav.Link href="#features">
                Team
                <Badge bg={bgColor} text="dark" style={{ marginLeft: 10 }}>
                  {team.length}
                </Badge>
              </Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
