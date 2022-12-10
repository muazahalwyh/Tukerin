/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductInput from '../components/ProductInput';
import '../styles/AddPage.css';

function AddPage({
  publishedProducts, setPublishedProducts, myProduct, setMyProduct, myProfile,
}) {
  if (myProfile.length === 0) {
    return (
      <div className="add-product__container">
        <p>Lengkapi profile Anda terlebih dahulu</p>
      </div>
    );
  }
  const noWA = myProfile[0].noHp;
  return (
    <div className="add-product__container">
      <h1>Tambah Produk</h1>
      <br />
      <ProductInput
        publishedProducts={publishedProducts}
        setPublishedProducts={setPublishedProducts}
        prevBarangSaya={myProduct}
        setBarangSaya={setMyProduct}
        noWA={noWA}
      />
    </div>
  );
}

AddPage.propTypes = {
  publishedProducts: PropTypes.arrayOf(PropTypes.object),
  setPublishedProducts: PropTypes.func,
  myProduct: PropTypes.arrayOf(PropTypes.object),
  setMyProduct: PropTypes.func,
  myProfile: PropTypes.arrayOf(PropTypes.object),
};

export default AddPage;
