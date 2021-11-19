import React from "react";

//Bootstrap
import { Accordion } from "react-bootstrap";

const Comments = ({ comments }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Comments</Accordion.Header>
        {comments?.map(comment => (
          <Accordion.Body>
            <div className="">
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </div>
          </Accordion.Body>
        ))}
      </Accordion.Item>
    </Accordion>
  );
};

export default Comments;
