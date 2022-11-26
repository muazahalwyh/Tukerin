/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

function TransactionPending({ productDiajukan, productDitawar }) {
  if (productDiajukan[0].status === 'pending') {
    return (
      <article className="transaction-item">
        <div className="barang-ditawar">
          <div className="transaction-item__header">
            <h3>Barang yang ditawar</h3>
          </div>
          <div className="transaction-item__body-pending">
            <div className="img-name-price_container">
              <img className="transaction-item__body-image-pending" src="./images/gambar-kamera.jpg" alt="kamera" />
              <div>
                <h3>{productDitawar[0].name}</h3>
                <h4>
                  Rp
                  {productDitawar[0].price}
                </h4>
              </div>
            </div>
            <div className="transaction-item__body-title-pending">
              <p>{productDitawar[0].description}</p>
            </div>
            <div className="transaction-item__body-action-pending">
              <button className="button-tochat">
                <span>Hubungi di</span>
                {' '}
                <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>

        <div className="barang-diajukan">
          <div className="transaction-item__header">
            <h3>Barang yang diajukan</h3>
          </div>
          <div className="transaction-item__body-pending">
            <div className="img-name-price_container">
              <img className="transaction-item__body-image-pending" src="./images/gambar-kamera.jpg" alt="kamera" />
              <div>
                <h3>{productDiajukan[0].name}</h3>
                <h4>
                  Rp
                  {productDiajukan[0].price}
                </h4>
              </div>
            </div>
            <div className="transaction-item__body-title-pending">
              <p>{productDiajukan[0].description}</p>
            </div>
            <div className="transaction-item__body-action-pending">
              <button className="button-pending">Pending</button>
            </div>
          </div>
        </div>
      </article>
    );
  }
  return (
    <p>Barang masih kosong</p>
  );
}

TransactionPending.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionPending;
