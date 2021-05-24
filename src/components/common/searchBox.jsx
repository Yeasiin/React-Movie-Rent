import React from "react";

const SearchBox = ({ value, handleSearch }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => handleSearch(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
