import React, { useState, useEffect } from "react";

//Styles
import "./Home.styles.css";
//Components

import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Home = () => {
  //State
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState("");

  //Functions

  // Your API key: 563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24

  useEffect(() => {
    const query = ["nature", "office", "movies", "animals", "space"];
    const random = Math.floor(Math.random() * (query.length - 1)) + 1;
    const keyword = query[random];
    const handleFetchToken = async () => {
      const request = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=30`,
        {
          headers: {
            Authorization:
              "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
          }
        }
      );
      const result = await request.json();
      setData(result.photos);
      setNextPage(result.next_page);
      console.log(result);
    };
    handleFetchToken();
  }, []);

  const handleFetchDataNextPage = async () => {
    const request = await fetch(nextPage, {
      headers: {
        Authorization:
          "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
      }
    });
    const result = await request.json();
    setNextPage(result.next_page);
    setData([...data, ...result.photos]);
  };

  return (
    <div className="">
      <ImageContainer
        data={data}
        title="Home"
        handleFetchDataNextPage={handleFetchDataNextPage}
      />
    </div>
  );
};

export default Home;
