import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
//Styles
import "./imageContainer.styles.css";

//Components
import SinglePhoto from "../../Home/SinglePhoto/SinglePhoto";

const ImageContainer = ({ data, title }) => {
  //Ref

  //Redux hooks
  const { favData } = useSelector(store => store.profile);

  return (
    <>
      <h2 className="text-center text-2xl font-bold">
        {title ? title : "sin título"}
      </h2>
      <div className="container mt-5">
        {data?.map(item => (
          <SinglePhoto
            key={item.id}
            data={item}
            isFavData={favData.some(photo => photo.id === item.id)}
          />
        ))}
      </div>
    </>
  );
};

ImageContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ),
  title: PropTypes.string
};

export default ImageContainer;
