import React, { useState } from "react";

//Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Images = () => {
  const [images, setImages] = useState("");
  const [data, setData] = useState(null);

  //Funcion
  const handleKeyword = ({ value }) => setImages(value);
  const handleSearchData = async e => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/v1/search?query=${images}&per_page=20`,
      {
        headers: {
          Authorization:
            "563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24"
        }
      }
    );
    const result = await request.json();
    setData(result);
    console.log(result);
  };
  return (
    <div className="w-3/4 m-auto">
      <h2 className="mt-3 font-bold text-2xl text-center">Imágenes</h2>
      <SearchForm
        handleKeyword={handleKeyword}
        handleSearchData={handleSearchData}
      />
      <ImageContainer data={data} />
    </div>
  );
};

export default Images;
