import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onChange }) {
    return (
        <div className="searchBar">
            <input
                onChange={onChange}
                className="searchBar__inp"
                type="search"
                placeholder="Enter username"
            />
            <i className="icon icon-search" />
        </div>
    );
}

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
};
export default SearchBar;
