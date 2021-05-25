import React, { Component } from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import paginate from "../utils/paginate";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import SearchBox from "./common/searchBox";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    currentGenre: "",
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const serverGenre = await getGenres();
    const serverMovies = await getMovies();
    const genres = [
      { _id: "", name: "All Genres" },
      ...(await serverGenre.data),
    ];

    this.setState({ genres: genres, movies: serverMovies });
  }
  handleNewMovie = () => {
    this.props.history.push("/movies/new");
    console.log("hey");
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

  handleDelete = async (key) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== key._id);
    this.setState({ movies });

    try {
      await deleteMovie(key._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("Movies Is Already Deleted");
      }
      this.setState({ movies: originalMovies });
    }
  };

  handleGenre = (genre) => {
    this.setState({ currentGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: null, currentPage: 1 });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      currentGenre,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (currentGenre && currentGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === currentGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    const { user } = this.props;

    if (count < 1) {
      return <p>There Are No Movies In The Database</p>;
    }

    const { totalCount, movies } = this.getPageData();

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
          {user && (
            <button
              className="btn btn-primary mb-3"
              onClick={this.handleNewMovie}
            >
              New Movie
            </button>
          )}

          <p>Showing {totalCount} Movies From Database </p>
          <SearchBox
            value={this.state.searchQuery}
            handleSearch={this.handleSearch}
          />
          <MoviesTable
            movies={movies}
            handleLike={this.handleLike}
            handleDelete={this.handleDelete}
            handleSort={this.handleSort}
            sortColumn={sortColumn}
            user={user}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={totalCount}
            pageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
