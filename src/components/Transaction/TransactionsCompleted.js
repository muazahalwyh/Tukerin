import React from 'react';
import PropTypes from 'prop-types';

function TransactionCompleted({ productDiajukan, kosong }) {
  // const img = new Image();
  // img = URL.revokeObjectURL(productDiajukan[0].image);
  // const reader = new FileReader();
  // reader.readAsArrayBuffer(productDiajukan[0].image);
  if (kosong) {
    return (
      <p>Barang masih kosong</p>
    );
  }
  return (
    <article className="transaction-item">
      <div className="barang-ditawar">
        <div className="transaction-item__header">
          <h3>Barang yang ditawar</h3>
        </div>
        <div className="transaction-item__body-pending">
          <div className="img-name-price_container">
            <img className="transaction-item__body-image-pending" src={productDiajukan[0].image} alt="kamera" />
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
            <p>Selesai</p>
          </div>
        </div>
      </div>
    </article>
  );
}

TransactionCompleted.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  kosong: PropTypes.bool.isRequired,
};

export default TransactionCompleted;
