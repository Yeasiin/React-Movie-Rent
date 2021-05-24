import React from "react";

const Input = ({ handleChange, errors, value, type, name, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        className="form-control"
        onChange={handleChange}
        id={name}
        name={name}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
