/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
// import Popup from 'reactjs-popup';
import BarangDitawar from './BarangDitawar';
import BarangDiajukan from './BarangDiajukan';
// import products from '../../utils/data/products';
// import TransactionPopup from '../pop-up/TransactionPopup';

function TransactionTakesPlace({ productDiajukan, productDitawar }) {
  function onTerima(id) {
    productDiajukan.forEach((obj) => {
      if (obj.id === id) {
        obj.status = 'selesai';
      }
      return (obj);
    });

    productDitawar.forEach((obj) => {
      obj.status = 'selesai';
    });

    // const index = productDiajukan.findIndex((product) => product.id === id);
    // setProductDiajukan([productDiajukan[index].status = 'selesai']);
    // const idFiltered = productDiajukan.filter((product) => (product.id === id));
    // setProductDiajukan(idFiltered.forEach((product) => product.status = 'selesai'));
  }

  if (productDiajukan != null) {
    return (
      <article className="transaction-item">
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
        {
          productDiajukan.map((product) => (
            <BarangDiajukan
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              onTerima={onTerima}
              {...product}
            />
          ))
        }
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
