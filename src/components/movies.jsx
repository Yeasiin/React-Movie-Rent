import React, { Component } from "react";
import _ from "lodash";
import paginate from "../utils/paginate";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ genres: genres });
  }

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

  handleGenre = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      currentGenre,
      movies: allMovies,
    } = this.state;

    if (count < 1) {
      return <p>There Are No Movies In The Database</p>;
    }
    const filtered =
      currentGenre && currentGenre._id
        ? allMovies.filter((m) => m.genre._id === currentGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-md-3">
          <ListGroup
            genres={this.state.genres}
            currentGenre={this.state.currentGenre}
            handleGenre={this.handleGenre}
          />
        </div>
        <div className="col-md-9">
          <p>Showing {filtered.length} Movies From Database </p>
          <MoviesTable
            movies={movies}
            handleLike={this.handleLike}
            handleDelete={this.handleDelete}
            handleSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={filtered.length}
            pageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
