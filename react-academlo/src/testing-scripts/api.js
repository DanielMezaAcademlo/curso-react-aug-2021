const key = "bf2db38a622d85c1cd6dd7bd156fa197";

export const handleFetchData = async city => {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  );
  const result = await request.json();
  return result;
};

export const handleFetchPokemon = async pokemon => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const resultpokemon = await request.json();
  return resultpokemon;
};
