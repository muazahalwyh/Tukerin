/* eslint-disable max-len */
import React from 'react';
import Popup from 'reactjs-popup';
import SilahkanLogin from '../pop-up/SilahkanLogin';
import MasukanBarangBarter from '../pop-up/MasukanBarangBarter';
// import { getUserLogged } from '../../utils/api-endpoint';

function AjukanBarterButton() {
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
      <MasukanBarangBarter />
    </Popup>
  );
}

export default AjukanBarterButton;
