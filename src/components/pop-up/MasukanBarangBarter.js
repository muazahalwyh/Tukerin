/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

function MasukanBarangBarter() {
  const [picture, setPicture] = useState([]);
  console.log(picture);

  const handlePicture = (e) => {
    console.log(e.target.files);
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  function onClick() {
    const root = document.querySelector('.root-popup-login');
    root.style.display = 'none';
  }
  return (
    <div className="root-popup-login">
      <div className="masukan-barang-barter">
        <form>
          <div className="close-form">
            <GrFormClose onClick={onClick} className="close-icon" />
          </div>
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
              <input type="file" onChange={handlePicture} />
              <AiOutlinePlus className="icon-add" />
            </div>
            <h4 className="nama-file">{picture.FileList}</h4>
          </label>
          <input className="ajukan-button" type="submit" value="Ajukan" />
        </form>
      </div>
    </div>
  );
}

export default MasukanBarangBarter;
