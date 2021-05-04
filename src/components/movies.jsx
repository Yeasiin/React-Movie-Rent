import React, { Component, Fragment } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    // movies[index] = { ...movies[index] }; //
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (key) => {
    const movies = this.state.movies.filter((m) => m._id !== key._id);
    this.setState({ movies });
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { length: count } = this.state.movies;
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
        <Pagination
          pageSize={pageSize}
          itemsCount={count}
          pageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </Fragment>
    );
  }
}

export default Movies;
