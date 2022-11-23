/* eslint-disable react/button-has-type */
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function TransactionPending() {
  return (
    <article className="transaction-item">
      <div className="transaction-item__header">
        <h3>Sepatu Sekolah</h3>
      </div>
      <div className="transaction-item__body-pending">
        <img className="transaction-item__body-image-pending" src="./images/gambar-kamera.jpg" alt="kamera" />
        <div className="transaction-item__body-title-pending">
          <h4>Kamera baru beli kemarin</h4>
          <h4>Rp.200.000</h4>
        </div>
        <div className="transaction-item__body-action-pending">
          <button className="button-pending">Pending</button>
          <button className="button-tochat">
            <span>Hubungi di</span>
            {' '}
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </article>
  );
}

export default TransactionPending;
