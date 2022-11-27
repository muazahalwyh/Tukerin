/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductInput from '../components/ProductInput';
import '../styles/AddPage.css';

function AddPage({
  publishedProducts, setPublishedProducts, myProduct, setMyProduct,
}) {
  return (
    <div className="add-product__container">
      <h1>Tambah Produk</h1>
      <br />
      <ProductInput
        publishedProducts={publishedProducts}
        setPublishedProducts={setPublishedProducts}
        prevBarangSaya={myProduct}
        setBarangSaya={setMyProduct}
      />
    </div>
  );
}

AddPage.propTypes = {
  publishedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPublishedProducts: PropTypes.func.isRequired,
  myProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProduct: PropTypes.func.isRequired,
};

export default AddPage;
