import React, { useState } from "react";

//Components
import WeatherForm from "../../Components/Home/Form/WeatherForm";
import CityInformation from "../../Components/Home/CityInformation/CityInformation";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
  //State
  const [cityName, setCityName] = useState("");
  const [cityInformation, setCityInformation] = useState(null);
  const [loader, setLoader] = useState(false);

  //Funciones
  const handleCity = ({ value }) => {
    setCityName(value);
  };

  const handleSearchWeather = async e => {
    e.preventDefault();
    setCityInformation(null);
    setLoader(true);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(API);
    const result = await response.json();
    setCityInformation(result);
    setLoader(false);
  };

  return (
    <div className="">
      <WeatherForm
        handleCity={handleCity}
        cityName={cityName}
        handleSearchWeather={handleSearchWeather}
      />

      {loader && <Loader />}

      {cityInformation && <CityInformation name={cityInformation.name} />}
    </div>
  );
};

export default Home;
