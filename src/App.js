import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/NavBar";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notfound";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/movies/:movieId" component={MovieForm} />
            <Route path="/login" component={LoginForm} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
