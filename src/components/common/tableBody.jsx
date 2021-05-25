import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";

class TableBody extends Component {
  render() {
    const { data, handleLike, handleDelete, user } = this.props;
    return (
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td>
                <Link to={`/movies/${item._id}`}>{item.title}</Link>
              </td>
              <td>{item.genre.name}</td>
              <td>{item.numberInStock}</td>
              <td>{item.dailyRentalRate}</td>
              <td>
                <Like like={item.liked} toggleLike={() => handleLike(item)} />
              </td>
              <td>
                {user && (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
