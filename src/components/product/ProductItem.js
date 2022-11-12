import React from 'react';
import PropTypes from 'prop-types';
import ProductItemBody from './ProductItemBody';
import ProductItemImage from './ProductItemImage';

// eslint-disable-next-line react/prop-types, object-curly-newline
function ProductItem({ id, image, name, category, price }) {
  return (
    <div className="product-item">
      <ProductItemImage imageUrl={image} />
      <ProductItemBody id={id} name={name} category={category} price={price} />
    </div>
  );
}

ProductItem.propType = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
