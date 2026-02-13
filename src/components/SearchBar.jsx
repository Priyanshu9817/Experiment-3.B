import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search books..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
