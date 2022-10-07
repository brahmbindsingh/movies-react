import React from "react";

const Search = (props) => {
  return (
    <>
        <p className="mt-4">Showing {props.total} movies from the database</p>
        <button type="button" className="btn btn-primary mt-2">
            New
        </button>
        <div className="row">
            <div className="col-4">
                <div className="input-group flex-nowrap">
                    <input
                        type="text"
                        className="form-control mt-4"
                        placeholder="Search..."
                        value={props.value}
                        onChange={(event) => props.handleInput(event.target.value)}
                    />
                </div>
            </div>
        </div>
    </>
  );
};

export default Search;
