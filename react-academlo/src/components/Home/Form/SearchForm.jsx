import React from "react";

//Bootstrap
import { Form, Col, Row, Button } from "react-bootstrap";

const SearchForm = ({ handleChangeName, handleSearchMovie }) => {
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: 20
      }}
    >
      <Form onSubmit={e => handleSearchMovie(e)}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Movie name"
              onChange={({ target }) => handleChangeName(target)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
