import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/from";

class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().min(3).required().email().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().min(2).required().label("Name"),
  };
  doSubmit = () => {
    console.log("Registering");
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-2 ">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}

            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
