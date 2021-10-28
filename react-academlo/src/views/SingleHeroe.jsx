import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleHeroe = () => {
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

  return <div></div>;
};

export default SingleHeroe;
