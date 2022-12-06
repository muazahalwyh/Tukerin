import React from 'react';
import PropTypes from 'prop-types';

function BarangPending({
  image, name, description, price,
}) {
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
          <button className="button-pending" type="submit">Pending</button>
        </div>
      </div>
    </div>
  );
}

BarangPending.propTypes = {
  image: PropTypes.arrayOf.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default BarangPending;
