import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari barang ..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
      <FaSearch className="fa-search" />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
