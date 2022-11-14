/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../utils/config';
import AjukanBarterButton from '../buttons/AjukanBarterButton';
import HubungiPemilikButton from '../buttons/HubungiPemilikButton';

function ProductDetail({
  name, price, condition, brand, weight, guarantee,
}) {
//   const idImage = `${CONFIG.BASE_IMAGE_URL} + ${id}`;
  const idImage = `${CONFIG.BASE_IMAGE_URL}`;
  return (
    <div className="detail-page">
      <div className="detail-page__headline-product">
        <img src={idImage} alt="product-img" />
        <div className="detail-page__headline-product__text">
          <p className="detail-page__name">Nama{ name }</p>
          <p className="detail-page__price">Rp. { price }</p>
        </div>
      </div>
      <div className="detail-page__detail-product">
        <div className="detail-page__informations">
          <p className="detail-product-text">Detail produk :</p>
          <div className="detail-product-detail">
            <div>
              <p>Kondisi</p>
              <p>Merek</p>
              <p>Berat produk</p>
              <p>Garansi</p>
            </div>
            <div>
              <p>:  {condition}</p>
              <p>:  {brand}</p>
              <p>:  {weight}</p>
              <p>:  {guarantee}</p>
            </div>
          </div>
        </div>
        <div className="detail-page__button">
          <AjukanBarterButton />
          <HubungiPemilikButton />
        </div>
      </div>
      {/* <div className="popup-root" /> */}
    </div>
  );
}

ProductDetail.propTypes = {
//   id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  guarantee: PropTypes.string.isRequired,
};

export default ProductDetail;
