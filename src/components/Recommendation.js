import React from 'react';
import products from '../utils/data/products';
import ProductItem from './product/ProductItem';

function Recommendation() {
  return (
    <div className="recommendations">
      {
        products.map((product) => (
          <ProductItem
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...product}
          />
        ))
        }
    </div>
  );
}

export default Recommendation;
