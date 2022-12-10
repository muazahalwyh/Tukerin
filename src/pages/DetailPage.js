/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../components/product/ProductDetail';

function DetailPage({
  filteredProducts, productDiajukan, setProductDiajukan,
  productDitawar, setProductDitawar, authedUser,
}) {
  const { id } = useParams();
  return (
    <section>
      <ProductDetail
        id={id}
        filteredProducts={filteredProducts}
        productDiajukan={productDiajukan}
        productDitawar={productDitawar}
        setProductDiajukan={setProductDiajukan}
        setProductDitawar={setProductDitawar}
        authedUser={authedUser}
      />
    </section>
  );
}

DetailPage.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.object),
  productDiajukan: PropTypes.arrayOf(PropTypes.object),
  setProductDiajukan: PropTypes.func,
  productDitawar: PropTypes.arrayOf(PropTypes.object),
  setProductDitawar: PropTypes.func,
  authedUser: PropTypes.string,
};

export default DetailPage;
