import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line object-curly-newline
function ProductItemBody({ id, name, category, price }) {
  return (
    <div className="product-item__body">
      <Link to={`/products/${id}`}><h3 className="product-item__name">{name}</h3></Link>
      <p className="product-item__category">{category}</p>
      <p className="product-item__price">{price}</p>
    </div>
  );
}

ProductItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItemBody;
