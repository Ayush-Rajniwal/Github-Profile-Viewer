import React from "react";

function SearchBar({ onChange }) {
    return (
        <div className="searchBar">
            <input
                onChange={onChange}
                aria-label="Search"
                className="searchBar__inp"
                type="search"
                placeholder="Enter username"
            />
            <i className="icon icon-search"></i>
        </div>
    );
}

export default SearchBar;
