import React from 'react';
import Category from '../components/Category';
import Recommendation from '../components/Recommendation';
import heroImage from '../images/hero.webp';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="hero-image">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="category">
        <h2>Kategori</h2>
        <Category />
      </div>
      <div className="recommendation-container">
        <h2>Rekomendasi</h2>
        <Recommendation />
      </div>
    </div>
  );
}

export default Homepage;
