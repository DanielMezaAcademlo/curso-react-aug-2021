import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";

//Actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SinglePhoto = ({ data, isFavData }) => {
  console.log(isFavData);

  //Redux hook
  const dispatch = useDispatch();

  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  // <AiOutlineHeart
  //         className="text-black cursor-pointer z-50"
  //         onClick={handleAddFavData}
  //       />

  return (
    <figure>
      <img src={data?.src.large} alt="A windmill" />
      <figcaption className="flex items-center">
        {/* <FaHeart
          className={`text-${isFavData ? "red" : "black"} cursor-pointer z-50`}
          onClick={handleAddFavData}
        /> */}

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

export default SinglePhoto;
