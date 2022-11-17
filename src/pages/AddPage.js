import React from 'react';
import PropTypes from 'prop-types';
import ProductInput from '../components/ProductInput';
import '../styles/AddPage.css';

function AddPage({ myProduct, setMyProduct }) {
  return (
    <div className="add-product__container">
      <h1>Tambah Produk</h1>
      <br />
      <ProductInput prevBarangSaya={myProduct} setBarangSaya={setMyProduct} />
    </div>
  );
}

AddPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProduct: PropTypes.func.isRequired,
};

export default AddPage;
