import React from "react";
import { useSelector } from "react-redux";
//Styles
import "./imageContainer.styles.css";

//Components
import SinglePhoto from "../../Home/SinglePhoto/SinglePhoto";

const ImageContainer = ({ data }) => {
  //Redux hooks
  const { favData } = useSelector(store => store.profile);

  return (
    <div className="container mt-5">
      {data?.photos?.map(item => (
        <SinglePhoto
          key={item.id}
          data={item}
          isFavData={favData.some(photo => photo.id === item.id)}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
