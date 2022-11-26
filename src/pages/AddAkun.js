/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MyAccountInput from '../components/MyAccount/MyAccountInput';
import '../styles/AddPage.css';

function AddAkun({ myProfil, setProfil }) {
  return (
    <div className="add-product__container">
      <h1>Ubah Profil</h1>
      <br />
      <MyAccountInput
        prevState={myProfil}
        setState={setProfil}
      />
    </div>
  );
}

AddAkun.propTypes = {
  myProfil: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProfil: PropTypes.func.isRequired,
};

export default AddAkun;
