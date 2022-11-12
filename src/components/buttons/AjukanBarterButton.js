import React from 'react';
import Popup from 'reactjs-popup';
import SilahkanLogin from '../pop-up/SilahkanLogin';
import MasukanBarangBarter from '../pop-up/MasukanBarangBarter';

function AjukanBarterButton() {
  // const { data } = await getUserLogged();
  const data = null;
  if (data === null) {
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
