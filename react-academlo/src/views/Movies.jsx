import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import MovieContext from "../context/MovieContext";

const Movies = () => {
  const { list } = useContext(MovieContext);

  return (
    <div>
      <h1>Movies</h1>
      {list?.map(movie => (
        <Card style={{ width: "21rem", margin: "auto", marginTop: 20 }}>
          <Card.Img variant="top" src={movie?.Poster} />
          <Card.Body>
            <Card.Title>{movie?.Title}</Card.Title>
            <Card.Text>{movie?.Plot}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Movies;
