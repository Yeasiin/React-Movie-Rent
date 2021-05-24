import React, { Component } from "react";

const Select = ({ name, label, handleChange, genres, errors, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={handleChange}
        className="custom-select"
        name={name}
        id={name}
        value={value}
      >
        <option value="" />
        {genres.map((genre) => (
          <option key={genre._id} value={genre._id}>
            {genre.name}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Select;
