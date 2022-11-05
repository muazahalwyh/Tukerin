import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <image src="" />
      <input
        type="text"
        placeholder="Cari barang ..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
