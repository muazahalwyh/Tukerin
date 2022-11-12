import React from 'react';
import PropTypes from 'prop-types';

function ProductItemImage({ image }) {
  return (
    <div className="product-item__image">
      <img src={image} alt="Product foto" />
    </div>
  );
}

ProductItemImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProductItemImage;
