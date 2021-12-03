import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
//Styles
import "./imageContainer.styles.css";

//Components
import SinglePhoto from "../../Home/SinglePhoto/SinglePhoto";

const ImageContainer = ({ data, title, handleFetchDataNextPage }) => {
  //State
  const [isVisible, setIsVisible] = useState(false);

  //Ref
  const containerRef = useRef(null);

  //Redux hooks
  const { favData } = useSelector(store => store.profile);

  //Funciones
  const callbackFunction = entries => {
    // console.log(entries);
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0
  };

  useEffect(() => {
    if (data?.length > 29) {
      const observer = new IntersectionObserver(callbackFunction, options);
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    }
  }, [containerRef, options, data]);

  useEffect(() => {
    if (isVisible) {
      handleFetchDataNextPage();
    }
  }, [isVisible]);

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

      <div ref={containerRef} style={{ height: "20px" }}></div>
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
