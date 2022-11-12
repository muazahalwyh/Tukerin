import React from 'react';
import PropTypes from 'prop-types';
import ProductItemBody from './ProductItemBody';
import ProductItemImage from './ProductItemImage';

// eslint-disable-next-line react/prop-types, object-curly-newline
function ProductItem({ image, name, category, price }) {
  return (
    <div className="product-item">
      <ProductItemImage imageUrl={image} />
      <ProductItemBody name={name} category={category} price={price} />
    </div>
  );
}

ProductItem.propType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
