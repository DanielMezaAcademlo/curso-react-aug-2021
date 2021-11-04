import React from "react";

const WeatherForm = ({ handleCity, handleSearchWeather }) => {
  return (
    <form action="" onSubmit={e => handleSearchWeather(e)}>
      <input
        type="text"
        placeholder="City Name"
        onChange={({ target }) => handleCity(target)}
      />
      <input type="submit" value="Search !" />
    </form>
  );
};

export default WeatherForm;
