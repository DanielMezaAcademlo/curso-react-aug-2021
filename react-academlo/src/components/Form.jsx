import React from "react";

//Styles
import "../styles/Form.css";

const Form = ({ handleChange, handleSearchHero, heroName }) => {
  return (
    <form action="" onSubmit={e => handleSearchHero(e)}>
      <input
        type="text"
        placeholder="Name"
        onChange={({ target }) => handleChange(target)}
        required={true}
        value={heroName}
      />
      <input type="submit" value="Search !" />
    </form>
  );
};

export default Form;
