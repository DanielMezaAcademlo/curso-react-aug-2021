import React, { useState, useEffect } from "react";

//Components
import Header from "../components/Header";
import Form from "../components/Form";
import HeroContainer from "../components/HeroContainer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  //STATE
  const [heroName, setHeroName] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //FUNCIONES
  const handleChange = ({ value }) => {
    setHeroName(value);
  };

  const handleSearchHero = async e => {
    e.preventDefault();
    setHeroData(null);
    setIsLoading(true);
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

      setIsLoading(false);
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
        {isLoading && <Loader />}

        {heroData && heroData.length > 0 ? (
          heroData.map(hero => (
            <Hero
              key={hero.id}
              name={hero.name}
              avatar={hero.image.url}
              id={hero.id}
            />
          ))
        ) : error ? (
          <h4>{error}</h4>
        ) : null}
      </HeroContainer>
    </div>
  );
};

export default Home;
