/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../utils/config';
import AjukanBarterButton from '../buttons/AjukanBarterButton';
import HubungiPemilikButton from '../buttons/HubungiPemilikButton';
import '../../styles/DetailPage.css';

// eslint-disable-next-line no-unused-vars
function ProductDetail({ authedUser, product }) {
  // const idImage = `${CONFIG.BASE_IMAGE_URL} + ${id}`;
  const idImage = `${CONFIG.BASE_IMAGE_URL}`;

  if (product.length > 0) {
    return (
      <div className="detail-page">
        <div className="detail-page__headline-product">
          <img src={idImage} alt="product-img" />
          <div className="detail-page__headline-product__text">
            <p className="detail-page__name">{product[0].name} </p>
            <p className="detail-page__category">{product[0].category}</p>
            <p className="detail-page__price">Rp. {product[0].price} </p>
            <p className="detail-product-text">Deskripsi produk :</p>
            <div className="detail-page__informations">
              <div className="detail-product-detail">
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
  return (
    <div><p>Barang tidak ketemu</p></div>
  );
}

ProductDetail.propTypes = {
  authedUser: PropTypes.string,
  product: PropTypes.arrayOf(PropTypes.object),
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
};

export default ProductDetail;
