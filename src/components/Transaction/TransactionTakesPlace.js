/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BarangDitawar from './BarangDitawar';
import BarangDiajukan from './BarangDiajukan';

function TransactionTakesPlace({ productDiajukan, productDitawar }) {
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
              <BarangDiajukan
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
  if (productDiajukan.forEach((obj) => obj.status !== 'pending')) {
    return (
      <p>Barang masih kosong</p>
    );
  }
}

TransactionTakesPlace.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionTakesPlace;
