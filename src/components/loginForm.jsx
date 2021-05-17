import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/from";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-2 ">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={this.state.username}
                className="form-control"
                onChange={this.handleChange}
                id="username"
                name="username"
              />
              {this.state.errors.username && (
                <div className="alert alert-danger">
                  {this.state.errors.username}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
                className="form-control"
                id="password"
                name="password"
              />
              {}
              {this.state.errors.password && (
                <div className="alert alert-danger">
                  {this.state.errors.password}
                </div>
              )}
            </div>
            <button
              disabled={this.validate()}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
