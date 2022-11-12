import React from 'react';
import PropTypes from 'prop-types';

function ProductItemBody({ name, category, price }) {
  return (
    <div className="product-item__body">
      <a href="/"><h3 className="product-item__name">{name}</h3></a>
      <p className="product-item__category">{category}</p>
      <p className="product-item__price">{price}</p>
    </div>
  );
}

ProductItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItemBody;
