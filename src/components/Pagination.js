import React from "react";
import "../views/specialists/Specialists.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  dotActiveColor,
  dotInactiveColor,
}) => {
  const handleClick = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div>
      {/* <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button> */}
      <span>
        {currentPage} / {totalPages}
      </span>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i + 1}
            className="paginationdot"
            style={{
              backgroundColor:
                currentPage === i + 1 ? dotActiveColor : dotInactiveColor,
            }}
            // onClick={() => handleClick(i + 1)}
          ></span>
        ))}
      </div>
      {/* <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
    </div>
  );
};

export default Pagination;
