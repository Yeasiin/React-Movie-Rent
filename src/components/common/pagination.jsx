import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({pageSize, itemsCount, pageChange, currentPage}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <button className="page-link" onClick={() => pageChange(page)}>
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageChange: PropTypes.func.isRequired,
};

export default Pagination;
