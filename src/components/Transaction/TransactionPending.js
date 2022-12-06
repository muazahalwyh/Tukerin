/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import BarangDitawar from './BarangDitawar';
import BarangPending from './BarangPending';

function TransactionPending({ productDiajukan, productDitawar }) {
  if (productDiajukan != null) {
    return (
      <article className="transaction-item">
        <div>
          {
            productDitawar.map((product) => (
              <BarangDitawar
                key={product.id}
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
                key={product.id}
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
  if (productDiajukan.length === 0 && productDitawar.length === 0) {
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
