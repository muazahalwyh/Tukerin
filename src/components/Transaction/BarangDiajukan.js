/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import TransactionPopup from '../pop-up/TransactionPopup';

function BarangDiajukan({
  id, image, name, description, price, productDiajukan, productDitawar, idProductDitawar,
}) {
  function onTerima(idProduct) {
    productDiajukan.forEach((obj) => {
      if (obj.id === idProduct) {
        obj.status = 'selesai';
      }
      localStorage.setItem('PRODUCT_DIAJUKAN', [JSON.stringify(productDiajukan)]);
      return (obj);
    });

    productDitawar.forEach((obj) => {
      if (obj.id === idProductDitawar) {
        obj.status = 'selesai';
      }
      localStorage.setItem('PRODUCT_DITAWAR', [JSON.stringify(productDitawar)]);
    });
  }
  function onDelete(idProduct) {
    productDiajukan.splice(productDiajukan.findIndex((product) => product.id === idProduct), 1);
    localStorage.setItem('PRODUCT_DIAJUKAN', JSON.stringify(productDiajukan));
    // eslint-disable-next-line max-len
    productDitawar.splice(productDitawar.findIndex((product) => product.id === idProductDitawar), 1);
    localStorage.setItem('PRODUCT_DITAWAR', JSON.stringify(productDitawar));
  }
  return (
    <div className="barang-diajukan">
      <div className="transaction-item__header">
        <h3>Barang yang diajukan</h3>
      </div>
      <div className="transaction-item__body-pending">
        <div className="img-name-price_container">
          <img className="transaction-item__body-image-pending" src={image} alt="product" />
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
          <button onClick={() => onTerima(id)} type="submit" className="button-accept">Terima</button>
          {/* <Popup trigger={<button onClick={() => onTerima(id)}
          type="submit" className="button-accept">Terima</button>}>
            <TransactionPopup />
          </Popup> */}
          <button onClick={() => onDelete(id)} type="submit" className="button-reject">Tolak</button>
        </div>
      </div>
    </div>
  );
}

BarangDiajukan.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.arrayOf.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
  idProductDitawar: PropTypes.string.isRequired,
};

export default BarangDiajukan;
