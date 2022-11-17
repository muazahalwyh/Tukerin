/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../utils/config';
import AjukanBarterButton from '../buttons/AjukanBarterButton';
import HubungiPemilikButton from '../buttons/HubungiPemilikButton';

function ProductDetail({
  name, price, category,
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
          <p className="detail-product-text">Deskripsi produk :</p>
          <div className="detail-page__informations">
            <div className="detail-product-detail">
              <p>{category}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec ut erat elit. Suspendisse enim enim, ornare vel massa sit amet,
                luctus mattis odio. Aliquam tristique convallis eros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-page__detail-product">

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
  category: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default ProductDetail;
