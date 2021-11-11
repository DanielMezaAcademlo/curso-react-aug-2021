import React, { createContext, useState } from "react";

const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const handleAddTeam = pokemon => {
    if (team.length === 6) {
      alert("Equipo lleno");
      return;
    }
    setTeam([...team, pokemon]);
  };

  const handleRemoveTeam = id => {
    // id = 7
    setTeam(team.filter(pokemon => pokemon.id !== id)); //
  };

  const data = {
    team,
    handleAddTeam,
    handleRemoveTeam
  };

  return <TeamContext.Provider value={data}>{children}</TeamContext.Provider>;
};

export { TeamProvider };
export default TeamContext;
