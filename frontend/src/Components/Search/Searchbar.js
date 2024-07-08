import React, { useState } from 'react';
import "./Searchbar.css";
 import searchicon from "../../app/search.svg"

const SearchBar = ({ username, handleSearch }) => {
  const [inputValue, setInputValue] = useState(username);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search GitHub username"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src={searchicon} alt="search" width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchBar;
