import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

//Actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SinglePhoto = ({ data, isFavData }) => {
  //Redux hook
  const dispatch = useDispatch();

  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  return (
    <figure>
      <img src={data?.src.large} alt="A windmill" />
      <figcaption className="flex items-center">
        <AiOutlineHeart
          className="text-black cursor-pointer z-50"
          className={`text-${isFavData ? "red" : "black"} cursor-pointer z-50`}
          onClick={handleAddFavData}
        />

        <a href={data?.photographer_url} target="_blank" className="ml-2">
          {data?.photographer}
        </a>
      </figcaption>
    </figure>
  );
};

SinglePhoto.propTypes = {
  isFavData: PropTypes.bool.isRequired
};

export default SinglePhoto;
