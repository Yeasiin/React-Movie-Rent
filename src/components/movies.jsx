import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    // movies[index] = { ...movies[index] }; //
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = (key) => {
    const movies = this.state.movies.filter((m) => m._id !== key._id);
    this.setState({ movies });
    console.log(key);
  };

  render() {
    if (this.state.movies.length < 1) {
      return <p>There Are No Movies In The Database</p>;
    }
    return (
      <Fragment>
        <p>Showing {this.state.movies.length} Movies From Database </p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    like={movie.liked}
                    toggleLike={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      this.handleDelete(movie);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Movies;
