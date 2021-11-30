import React from "react";

//Styles
import "./SearchForm.styles.css";

const SearchForm = ({ handleKeyword, handleSearchData }) => {
  return (
    <form className="w-1/2 m-auto mt-5 mb-5" onSubmit={handleSearchData}>
      <input
        type="text"
        className="w-3/4 px-3 py-3 outline-none border border-black search-input"
        placeholder="Search image by keyword"
        onChange={({ target }) => handleKeyword(target)}
      />
      <input
        type="submit"
        value="Search"
        className="w-1/4 bg-black px-3 py-3 border border-black text-white"
      />
    </form>
  );
};

export default SearchForm;
