import React from "react";

//CUSTOM HOOK
import { useFetchData } from "../../Hooks/useFetchData";

const Pokemon = () => {
  const { data } = useFetchData("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(data);

  return (
    <div>
      <h2>Pokemon</h2>
    </div>
  );
};

export default Pokemon;
