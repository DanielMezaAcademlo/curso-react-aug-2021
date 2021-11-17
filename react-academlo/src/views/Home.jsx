import React, { useState, useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
//Components
import Header from "../components/custom/Header/Header";
import SearchForm from "../components/Home/Form/SearchForm";
//Context
import MovieContext from "../context/MovieContext";

const Home = () => {
  //Context
  const { handleChangeList } = useContext(MovieContext);

  //STATE
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const handleFirstMovie = async () => {
      try {
        const request = await fetch(
          `https://www.omdbapi.com/?t=Avengers&apikey=763cfa63`
        );
        const result = await request.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    handleFirstMovie();
  }, []);

  //FUNCIONES

  const handleChangeName = ({ value }) => {
    setName(value);
  };

  const handleSearchMovie = async e => {
    e.preventDefault();
    try {
      const request = await fetch(
        `https://www.omdbapi.com/?t=${name}&apikey=763cfa63`
      );
      const result = await request.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchForm
        handleChangeName={handleChangeName}
        handleSearchMovie={handleSearchMovie}
      />

      {data ? (
        <Card style={{ width: "21rem", margin: "auto", marginTop: 20 }}>
          <Card.Img variant="top" src={data?.Poster} />
          <Card.Body>
            <Card.Title>{data?.Title}</Card.Title>
            <Card.Text>{data?.Plot}</Card.Text>
            <Button variant="primary" onClick={() => handleChangeList(data)}>
              Add
            </Button>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};

export default Home;
