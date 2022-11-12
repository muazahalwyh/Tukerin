import React from 'react';
import ProductInput from '../components/ProductInput';

function AddPage() {
  return (
    <div className="add-product__container">
      <h1>Tambah Produk</h1>
      <br />
      <ProductInput />
    </div>
  );
}

export default AddPage;
