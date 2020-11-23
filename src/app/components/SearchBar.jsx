import React from "react";

function SearchBar({ onChange }) {
    return (
        <div className="searchBar">
            <input
                onChange={onChange}
                className="searchBar__inp"
                type="search"
                placeholder="Enter username"
            />
            <i className="icon icon-search"></i>
        </div>
    );
}

export default SearchBar;
