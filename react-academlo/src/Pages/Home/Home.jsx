import React, { useState, useEffect } from "react";

//Styles
import "./Home.styles.css";
//Components

const Home = () => {
  //State
  const [name, setName] = useState("");

  //Functions
  const handleArtistName = e => {
    setName(e.target.value);
  };
  // Your API key: 563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24

  useEffect(() => {
    const handleFetchToken = async () => {
      const request = await fetch(
        // "https://api.pexels.com/videos/search?query=nature&per_page=1",
        "https://api.pexels.com/v1/search?query=nature&per_page=20",

        {
          headers: {
            Authorization:
              "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
          }
        }
      );
      const result = await request.json();
      console.log(result);
    };
    handleFetchToken();
  }, []);

  return (
    <div className="">
      <div className="container">
        <figure>
          <img
            src="https://assets.codepen.io/12005/windmill.jpg"
            alt="A windmill"
          />
          <figcaption>
            <a href="#">1</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/suspension-bridge.jpg"
            alt="The Clifton Suspension Bridge"
          />
          <figcaption>
            <a href="#">2</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/sunset.jpg"
            alt="Sunset and boats"
          />
          <figcaption>
            <a href="#">3</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/snowy.jpg"
            alt="a river in the snow"
          />
          <figcaption>
            <a href="#">4</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-balloons1.jpg"
            alt="a single checked balloon"
          />
          <figcaption>
            <a href="#">5</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/dog-balloon.jpg"
            alt="a hot air balloon shaped like a dog"
          />
          <figcaption>
            <a href="#">6</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/abq-balloons.jpg"
            alt="View from a hot air balloon of other balloons"
          />
          <figcaption>
            <a href="#">7</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/disney-balloon.jpg"
            alt="a balloon fairground ride"
          />
          <figcaption>
            <a href="#">8</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-harbor.jpg"
            alt="sunrise over a harbor"
          />
          <figcaption>
            <a href="#">9</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/bristol-balloons2.jpg"
            alt="three hot air balloons in a blue sky"
          />
          <figcaption>
            <a href="#">10</a>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://assets.codepen.io/12005/toronto.jpg"
            alt="the Toronto light up sign at night"
          />
          <figcaption>
            <a href="#">11</a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Home;
