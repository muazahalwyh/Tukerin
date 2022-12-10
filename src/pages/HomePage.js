/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import '../styles/HomePage.css';

function Homepage({ filteredProducts }) {
  return (
    <div className="homepage-container">
      <div className="hero-image">
        <div className="container-fluid p-0">
          <div id="carousel" className="carousel slide hero-slides" data-ride="carousel">
            <ol className="carousel-indicators">
              <li className="active" data-target="#carousel" data-slide-to="0" />
              <li data-target="#carousel" data-slide-to="1" />
              <li data-target="#carousel" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active boat" />
              <div className="carousel-item sea" />
              <div className="carousel-item river" />
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="category">
        <h2>Kategori</h2>
        <Category />
      </div>
      <div className="recommendation-container">
        <h2>Daftar Barang</h2>
        <Recommendation filteredProducts={filteredProducts} />
      </div>
    </div>
  );
}

Homepage.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Homepage;
