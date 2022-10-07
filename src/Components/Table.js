import React from "react";
import Pagination from "./Pagination";
import TableItem from "./TableItem";

const Table = (props) => {
  return (
    <div className="row">
      <div className="col-10">
        <table className="table mt-4">
          <thead style={{borderTop: "1px solid #dee2e6"}}>
            <tr>
              <th scope="col">Movie</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <TableItem list={props.list} deleteMovie={props.deleteMovie} totalPages = {props.totalPages} currPage = {props.currPage} />
          </tbody>
        </table>
        <Pagination totalPages = {props.totalPages} currPage = {props.currPage} selectPage = {props.selectPage}/>
      </div>
    </div>
  );
};

export default Table;
