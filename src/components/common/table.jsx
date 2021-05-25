import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({
  columns,
  data,
  sortColumn,
  handleSort,
  handleLike,
  handleDelete,
  user,
}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        handleSort={handleSort}
      />
      <TableBody
        data={data}
        user={user}
        handleLike={handleLike}
        handleDelete={handleDelete}
      />
    </table>
  );
};

export default Table;
