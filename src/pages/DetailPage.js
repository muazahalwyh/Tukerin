/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../components/product/ProductDetail';
// import products from '../utils/data/products';

function DetailPage({
  filteredProducts,
}) {
  console.log(filteredProducts);
  const { id } = useParams();

  // const [user, setAuthedUser] = useState('');
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(filteredProducts.filter((productt) => productt.id === id));
  }, []);

  if (product === null) {
    return <p>Product tidak ditemukan</p>;
  }
  return (
    <section>
      <ProductDetail
        // authedUser={authedUser}
        product={product}
      />
    </section>
  );
}

DetailPage.propTypes = {
  // user: PropTypes.string.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  // productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setProductDiajukan: PropTypes.func.isRequired,
};

export default DetailPage;
