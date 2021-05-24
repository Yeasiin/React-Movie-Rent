import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./dropDown";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = {
      [input.name]: this.schema[input.name],
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors: errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    return (
      <Input
        handleChange={this.handleChange}
        errors={this.state.errors[name]}
        value={this.state.data[name]}
        type={type}
        name={name}
        label={label}
      />
    );
  };

  renderSelect = (name, label, genres) => {
    const { data, errors } = this.state;

    return (
      <Select
      name={name}
      value={data[name]}
      label={label}
      genres={genres}
      errors={errors[name]}
      handleChange={this.handleChange}
      />
    );
  };
}

export default Form;
