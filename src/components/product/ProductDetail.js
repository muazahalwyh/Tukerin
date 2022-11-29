/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../utils/config';
import AjukanBarterButton from '../buttons/AjukanBarterButton';
import HubungiPemilikButton from '../buttons/HubungiPemilikButton';
import '../../styles/DetailPage.css';

function ProductDetail({
  id, filteredProducts, productDiajukan, productDitawar, setProductDiajukan, setProductDitawar,
}) {
  // const idImage = `${CONFIG.BASE_IMAGE_URL} + ${id}`;
  const idImage = `${CONFIG.BASE_IMAGE_URL}`;
  const data = filteredProducts.filter((productt) => productt.id === id);
  const { noWA } = data[0];

  return (
    <div className="detail-page">
      <div className="detail-page__headline-product">
        <img src={idImage} alt="product-img" />
        <div className="detail-page__headline-product__text">
          <p className="detail-page__name">{data[0].name} </p>
          <p className="detail-page__category">{data[0].category}</p>
          <p className="detail-page__price">Rp. {data[0].price} </p>
          <p className="detail-product-text">Deskripsi produk :</p>
          <div className="detail-page__informations">
            <div className="detail-product-detail">
              <p>{data[0].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="detail-page__detail-product">
        <div className="detail-page__button">
          <AjukanBarterButton
            id={id}
            filteredProducts={filteredProducts}
            productDiajukan={productDiajukan}
            productDitawar={productDitawar}
            setProductDiajukan={setProductDiajukan}
            setProductDitawar={setProductDitawar}
          />
          <a href={`https://wa.me/${noWA}`} aria-label="hubungi whatsapp"><HubungiPemilikButton /></a>
        </div>
      </div>
      {/* <div className="popup-root" /> */}
    </div>
  );
}

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  setProductDitawar: PropTypes.func.isRequired,
};

export default ProductDetail;
