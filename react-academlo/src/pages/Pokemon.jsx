import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { id, name } = useParams();
  useEffect(() => {
    const handlePokemonByiD = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.json();
      console.log(result);
    };

    handlePokemonByiD();
  }, []);

  return (
    <div>
      <h2>Si funciona :D</h2>
    </div>
  );
};

export default Pokemon;
