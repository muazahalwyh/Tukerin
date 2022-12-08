/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unreachable */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BarangSelesai from './BarangSelesai';

function TransactionCompleted({ productDiajukan }) {
  // const img = new Image();
  // img = URL.revokeObjectURL(productDiajukan[0].image);
  // const reader = new FileReader();
  // reader.readAsArrayBuffer(productDiajukan[0].image);
  if (productDiajukan.lenngth > 0) {
    return (
      <article className="transaction-item">
        {
            productDiajukan.map((product) => (
              <BarangSelesai
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                {...product}
              />
            ))
          }
      </article>
    );
  }
  return (
    <p>Barang masih kosong</p>
  );
}

TransactionCompleted.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionCompleted;
