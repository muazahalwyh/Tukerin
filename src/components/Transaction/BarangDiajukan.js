/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import TransactionPopup from '../pop-up/TransactionPopup';

function BarangDiajukan({
  id, image, name, description, price, onTerima,
}) {
  return (
    <div className="barang-diajukan">
      <div className="transaction-item__header">
        <h3>Barang yang diajukan</h3>
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
        <div className="transaction-item__body-action">
          <Popup trigger={<button onClick={onTerima(id)} type="submit" className="button-accept">Terima</button>}>
            <TransactionPopup />
          </Popup>
          {/* <button onClick={onTerima} type="submit" className="button-reject">Terima</button> */}
          <button type="submit" className="button-reject">Tolak</button>
        </div>
      </div>
    </div>
  );
}

BarangDiajukan.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onTerima: PropTypes.func.isRequired,
};

export default BarangDiajukan;
