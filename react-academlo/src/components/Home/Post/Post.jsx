import React from "react";
//Bootstrap
import { Card } from "react-bootstrap";
const Post = ({ title, body }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
