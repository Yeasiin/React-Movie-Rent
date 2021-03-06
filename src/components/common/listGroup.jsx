import React from "react";

const ListGroup = ({
  genres,
  handleGenre,
  valueProperty,
  textProperty,
  currentGenre,
}) => {
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          className={
            currentGenre === genre
              ? "list-group-item active "
              : "list-group-item"
          }
          onClick={() => handleGenre(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};

export default ListGroup;
