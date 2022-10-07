import React from "react";

const Pagination = (props) => {
  let arr = [];
  for (let i = 1; i <= props.totalPages; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <nav>
      <ul className="pagination mt-4">
        {arr.map((el) => {
          return (
            <li className="page-item" key={el} onClick={()=>props.selectPage(el)}>
              <a style={{cursor: "pointer"}} className={`page-link ${ props.currPage === el ? "active" : "" }`}>
                {el}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
