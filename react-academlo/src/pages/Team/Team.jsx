import React, { useContext } from "react";
//Context
import TeamContext from "../../context/TeamContext";

//Components
import PokemonItem from "../../componentes/PokemonItem";
import CardContainer from "../../componentes/CardContainer";

const Team = () => {
  const { team } = useContext(TeamContext);

  return (
    <div>
      <h2>Team</h2>
      <CardContainer>
        {team && team.length > 0 ? (
          team.map(pokemon => (
            <PokemonItem
              name={pokemon.name}
              img={pokemon.img}
              id={pokemon.id}
            />
          ))
        ) : (
          <h2>Equipo vacío</h2>
        )}
      </CardContainer>
    </div>
  );
};

export default Team;
