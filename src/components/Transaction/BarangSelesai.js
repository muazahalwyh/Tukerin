/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function BarangSelesai({
  image, name, description, price,
}) {
  return (
    <div className="barang-ditawar">
      <div className="transaction-item__header">
        <h3>Transaksi Selesai</h3>
      </div>
      <div className="transaction-item__body-pending">
        <div className="img-name-price_container">
          <img className="transaction-item__body-image-pending" src={image} alt="kamera" />
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
        <div className="transaction-item__body-action-pending selesai">
          <p>Selesai</p>
        </div>
      </div>
    </div>
  );
}

BarangSelesai.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BarangSelesai;
