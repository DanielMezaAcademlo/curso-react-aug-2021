import React from "react";
//Bootstrap
import { Card } from "react-bootstrap";
//Components
import Comments from "../Comments/Comments";

const Post = ({ title, body, comments }) => {
  return (
    <Card style={{ width: "100%", marginLeft: "2.5%", marginTop: "1rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Comments comments={comments} />
      </Card.Body>
    </Card>
  );
};

export default Post;
