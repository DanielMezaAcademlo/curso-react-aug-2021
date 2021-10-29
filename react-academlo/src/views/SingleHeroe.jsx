import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Componentes
import Hero from "../components/Hero";

const SingleHeroe = () => {
  const heroStyles = {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  //State
  const [singleHeroData, setSingleHeroData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //RouterHooks
  const { id } = useParams();

  useEffect(() => {
    const handleSingleHeroData = async () => {
      setSingleHeroData(null);
      setIsLoading(true);
      const token = "10220588968268520";
      try {
        const response = await fetch(
          `https://www.superheroapi.com/api.php/${token}/${id}`
        );
        const result = await response.json();
        console.log(result);
        if (result.response === "success") {
          setError(null);
          setSingleHeroData(result);
        } else {
          setSingleHeroData(null);
          setError(result.error);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    handleSingleHeroData();
  }, []);

  return (
    <div style={heroStyles}>
      <Hero
        key={singleHeroData?.id}
        name={singleHeroData?.name}
        avatar={singleHeroData?.image.url}
        bio={singleHeroData?.biography}
      />
    </div>
  );
};

export default SingleHeroe;
