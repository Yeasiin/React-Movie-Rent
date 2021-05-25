import React, { Component } from "react";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, handleLike, handleDelete, sortColumn, handleSort, user } =
      this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        handleLike={handleLike}
        handleDelete={handleDelete}
        sortColumn={sortColumn}
        handleSort={handleSort}
        user={user}
      />
    );
  }
}

export default MoviesTable;
