import React from "react";

const ListGroup = (props) => {
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      <li className="list-group-item active ">All Genres</li>

      {props.genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item "
          onClick={() => props.handleGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
