import React from "react";

const SingleCharacter = ({ avatar, name }) => {
  return (
    <div>
      <img src={avatar} alt="Character" />
      <h3>{name}</h3>
    </div>
  );
};

export default SingleCharacter;
