import React from 'react';
import ProductItem from './product/ProductItem';

function Recommendation(filteredProducts) {
  return (
    <div className="recommendations">
      {
        filteredProducts.filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
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
