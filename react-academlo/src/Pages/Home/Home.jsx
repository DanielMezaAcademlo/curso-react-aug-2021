import React, { useState, useEffect } from "react";

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
        "https://api.pexels.com/videos/search?query=nature&per_page=1",
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
      <form action="">
        <input
          type="text"
          placeholder="Search Artist"
          onChange={handleArtistName}
        />

        <button type="submit">Search</button>
      </form>
      <video
        src="https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761"
        controls
      ></video>
      <img
        src="https://images.pexels.com/photos/7289110/pexels-photo-7289110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        alt=""
      />
    </div>
  );
};

export default Home;
