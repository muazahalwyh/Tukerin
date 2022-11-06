import React from 'react';
import products from '../utils/data/category';

function Category() {
  if (products.length > 0) {
    return (
      <div className="categories">
        {
            products.map((product) => `${product.category}, `)
        }
      </div>
    );
  }
}

export default Category;
