import React from "react";

//Bootstrap
import { Nav } from "react-bootstrap";

const Tabs = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Information</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Posts</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Tabs;
