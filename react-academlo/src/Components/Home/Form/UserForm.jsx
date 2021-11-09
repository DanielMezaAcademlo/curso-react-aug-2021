import React from "react";

//Styles
import "./UserForm.styles.css";

const UserForm = ({ handleUserName, handleFetchData }) => {
  return (
    <form
      action=""
      className="w-1/2 m-auto mt-10 text-center"
      onSubmit={e => handleFetchData(e)} //unaFuncion
    >
      <input
        type="text"
        placeholder="User name"
        className="p-4 w-3/4 search-input"
        onChange={({ target }) => handleUserName(target)}
      />
      <input
        type="submit"
        value="Search !"
        className="p-4 w-1/4 bg-black hover:bg-yellow text-white hover:text-black search-input_button"
      />
    </form>
  );
};

export default UserForm;
