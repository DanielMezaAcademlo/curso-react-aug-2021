import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
//Bootstrap components
import { Card, Button } from "react-bootstrap";

//Context
import TeamContext from "../context/TeamContext";

const PokemonItem = ({ name, img, id }) => {
  const { handleAddTeam, handleRemoveTeam } = useContext(TeamContext);
  const { pathname } = useLocation();

  const handleAddOrRemoveTeam = () => {
    if (pathname === "/") {
      handleAddTeam({ name, img, id });
    } else {
      handleRemoveTeam(id);
    }
  };

  return (
    <Card style={{ width: "18rem", overflow: "hidden" }}>
      <Card.Img variant="top" src={img} style={{ height: "300px" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button
          variant={pathname === "/" ? "primary" : "danger"}
          onClick={handleAddOrRemoveTeam}
        >
          {pathname === "/" ? "Add" : "Remove"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonItem;
