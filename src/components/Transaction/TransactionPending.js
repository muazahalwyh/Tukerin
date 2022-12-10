/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import BarangDitawar from './BarangDitawar';
import BarangPending from './BarangPending';

function TransactionPending({ productDiajukan, productDitawar }) {
  if (productDiajukan.length > 0) {
    return (
      <article className="transaction-item">
        <div>
          {
            productDitawar.map((product) => (
              <BarangDitawar
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                {...product}
              />
            ))
          }
        </div>
        <div>
          {
            productDiajukan.map((product) => (
              <BarangPending
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                productDiajukan={productDiajukan}
                productDitawar={productDitawar}
                {...product}
              />
            ))
          }
        </div>
      </article>
    );
  }
  if (productDiajukan.length === 0 || productDiajukan === null) {
    return (
      <p>Barang masih kosong</p>
    );
  }
}

TransactionPending.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionPending;
