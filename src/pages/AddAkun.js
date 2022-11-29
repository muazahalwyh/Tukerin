/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import MyAccountInput from '../components/MyAccount/MyAccountInput';
import '../styles/AddPage.css';

function AddAkun({ myProfile, setMyProfile }) {
  return (
    <div className="add-product__container">
      <h1>Ubah Profil</h1>
      <br />
      <MyAccountInput
        prevState={myProfile}
        setState={setMyProfile}
      />
    </div>
  );
}

AddAkun.propTypes = {
  myProfile: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProfile: PropTypes.func.isRequired,
};

export default AddAkun;
