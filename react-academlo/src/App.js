import React, { useState, useEffect } from "react";

//Components
import Header from "./components/Header";
import Form from "./components/Form";
import HeroContainer from "./components/HeroContainer";
import Hero from "./components/Hero";

//Styles
import "./styles/App.css";

const App = () => {
  //STATE
  const [heroName, setHeroName] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);

  //EFFECT

  //FUNCIONES
  const handleChange = ({ value }) => {
    setHeroName(value);
  };

  const handleSearchHero = async e => {
    e.preventDefault();
    const token = "10220588968268520";
    try {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/${token}/search/${heroName}`
      );
      const result = await response.json();

      if (result.response === "success") {
        setError(null);
        setHeroData(result.results);
      } else {
        setHeroData(null);
        setError(result.error);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        handleChange={handleChange}
        handleSearchHero={handleSearchHero}
        heroName={heroName}
      />

      <HeroContainer>
        {heroData ? (
          heroData.map(hero => (
            <Hero key={hero.id} name={hero.name} avatar={hero.image.url} />
          ))
        ) : error ? (
          <h4>{error}</h4>
        ) : null}
        <Hero />
      </HeroContainer>
    </div>
  );
};

export default App;
