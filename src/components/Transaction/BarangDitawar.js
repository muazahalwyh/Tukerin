/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

function BarangDitawar({
  id, image, name, description, price,
}) {
  return (
    <div className="barang-ditawar">
      <div className="transaction-item__header">
        <h3>Barang yang ditawar</h3>
      </div>
      <div className="transaction-item__body-pending">
        <div className="img-name-price_container">
          <img className="transaction-item__body-image-pending" src="./images/gambar-kamera.jpg" alt="kamera" />
          <div>
            <h3>{name}</h3>
            <h4>
              Rp
              {price}
            </h4>
          </div>
        </div>
        <div className="transaction-item__body-title-pending">
          <p>{description}</p>
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
  );
}

BarangDitawar.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BarangDitawar;
