/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function MasukanBarangBarter() {
  function onClick() {
    const root = document.querySelector('.root-popup-login');
    root.style.display = 'none';
  }
  return (
    <div onClick={onClick} className="root-popup-login">
      <div className="masukan-barang-barter">
        <form>
          <p>Masukan barang yang ingin kamu tukar ...</p>
          <label>
            Name
            <br />
            <input type="text" name="name" />
            <br />
            <br />
            Harga
            <br />
            <input type="text" name="harga" />
            <br />
            <br />
            Pesan
            <br />
            <input type="text" name="pesan" />
            <br />
            <br />
            Foto
            <br />
            <div className="input-image">
              <AiOutlinePlus />
            </div>
          </label>
          <br />
          <input className="ajukan-button" type="submit" value="Ajukan" />
        </form>
      </div>
    </div>
  );
}

export default MasukanBarangBarter;
