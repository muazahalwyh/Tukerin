/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BarangDitawar from './BarangDitawar';
import BarangDiajukan from './BarangDiajukan';

function TransactionTakesPlace({
  productDiajukan, productDitawar,
}) {
  const [idProductDitawar, setIdProductDitawar] = useState('');
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
                setIdProductDitawar={setIdProductDitawar}
                {...product}
              />
            ))
          }
        </div>
        <div>
          {
            productDiajukan.map((product) => (
              <BarangDiajukan
                id={product.id}
                idProductDitawar={idProductDitawar}
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
  return (
    <p>Barang masih kosong</p>
  );
}

TransactionTakesPlace.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
  idProductDitawar: PropTypes.string,
  setIdProductDitawar: PropTypes.func,
};

export default TransactionTakesPlace;
