import React from 'react';
import ProductInput from '../components/ProductInput';

function AddPage() {
  return (
    <div className="add-product__container">
      <h3>Tambah Produk</h3>
      <br />
      <ProductInput />
    </div>
  );
}

export default AddPage;
