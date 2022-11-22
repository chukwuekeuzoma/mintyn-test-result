import React from "react";

interface Props {
  postPerPage: any;
  totalPosts: number;
  paginate: (number: number) => number;
}

function Pagination({ postPerPage, totalPosts, paginate }: Props) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
        <div>
            <div className="left">Some random title</div>
            <div className="right"><img src="image.jpg"/></div>
       </div>
      {pageNumbers.map((number, key) => (
        <div key={key} style={{ cursor: "pointer" }}>
          <p onClick={() => paginate(number)}>{number}</p>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
