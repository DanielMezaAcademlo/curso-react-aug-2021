import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handlePokemonName = ({ target }) => {
    setName(target.value);
  };

  const handleSearchPokemon = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const result = await response.json();
      setPokemonData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 10 }}>
      <form onSubmit={handleSearchPokemon}>
        <input type="text" onChange={handlePokemonName} />
        <button type="submit">Search</button>
      </form>

      <div style={{ margin: "auto" }}>
        <h4>{pokemonData?.name}</h4>
        <img
          src={pokemonData?.sprites?.front_default}
          alt={pokemonData?.name}
        />
        <button>
          <Link to={`/pokemon/${pokemonData?.id}/${pokemonData?.name}`}>
            Ver más
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
