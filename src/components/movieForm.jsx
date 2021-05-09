import React from "react";

class MovieForm extends React.Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h2>Movies From {this.props.match.params.movieId} </h2>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
