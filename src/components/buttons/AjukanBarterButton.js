/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import SilahkanLogin from '../pop-up/SilahkanLogin';
import MasukanBarangBarter from '../pop-up/MasukanBarangBarter';

function AjukanBarterButton({
  id, filteredProducts, productDiajukan, productDitawar, setProductDiajukan, setProductDitawar,
}) {
  const data = localStorage.getItem('AUTHED_USER');

  if (data == null) {
    return (
      <Popup trigger={<button className="ajukan-barter" type="button">Ajukan Barter</button>}>
        <SilahkanLogin />
      </Popup>
    );
  }
  return (
    <Popup trigger={<button className="ajukan-barter" type="button">Ajukan Barter</button>}>
      <MasukanBarangBarter
        id={id}
        filteredProducts={filteredProducts}
        productDiajukan={productDiajukan}
        productDitawar={productDitawar}
        setProductDiajukan={setProductDiajukan}
        setProductDitawar={setProductDitawar}
      />
    </Popup>
  );
}

AjukanBarterButton.propTypes = {
  id: PropTypes.string.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  setProductDitawar: PropTypes.func.isRequired,
};

export default AjukanBarterButton;
