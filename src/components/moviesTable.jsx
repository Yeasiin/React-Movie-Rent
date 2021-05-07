import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  render() {
    const { movies, handleLike, handleDelete, handleSort } = this.props;
    return (
      <table className="table">
        <thead style={{cursor:"pointer"}} >
          <tr>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("genre.name")}>Genre</th>
            <th onClick={() => handleSort("numberInStock")}>Stock</th>
            <th onClick={() => handleSort("dailyRentalRate")}>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like like={movie.liked} toggleLike={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    handleDelete(movie);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
