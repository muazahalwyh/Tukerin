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

function TransactionTakesPlace({ productDiajukan, setProductDiajukan, productDitawar }) {
  function onTerima() {
    setProductDiajukan([{
      name: productDiajukan[0].name,
      image: productDiajukan[0].image,
      price: productDiajukan[0].price,
      description: productDiajukan[0].description,
      status: 'selesai',
    }]);
  }
  if (productDiajukan[0].status === 'pending') {
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
                onTerima={onTerima}
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
};

export default TransactionTakesPlace;
