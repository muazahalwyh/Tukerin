import React from 'react';
import categories from '../utils/data/category';

function Category() {
  if (categories.length > 0) {
    return (
      <div className="categories">
        {
          categories.map((category) => `${category.category}, `)
        }
      </div>
    );
  }
}

export default Category;
