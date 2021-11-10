import React, { useContext } from "react";

//Context
import DarkModeContext from "../../../Context/DarkModeContext";

//Styles
import "./UserForm.styles.css";

const UserForm = ({ handleUserName, handleSearchUser }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <form
      action=""
      className="w-5/6 tablet:w-1/2  m-auto mt-10 text-center"
      onSubmit={e => handleSearchUser(e)}
    >
      <input
        type="text"
        placeholder="User name"
        className="p-4 w-2/3 tablet:w-3/4 search-input"
        onChange={({ target }) => handleUserName(target)}
      />
      <input
        type="submit"
        value="Search !"
        className={`p-4 w-1/3 tablet:w-1/4  text-white hover:text-black search-input_button ${
          darkMode ? "bg-black hover:bg-yellow" : "bg-yellow hover:bg-black"
        }`}
      />
    </form>
  );
};

export default UserForm;
