import React, { Component } from "react";
import Like from "./like";

class TableBody extends Component {
  render() {
    const { data, handleLike, handleDelete } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
              <Like like={item.liked} toggleLike={() => handleLike(item)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
