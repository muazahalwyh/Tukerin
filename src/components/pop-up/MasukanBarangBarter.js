/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function MasukanBarangBarter() {
  return (
    <div className="masukan-barang-barter">
      <form>
        <p>Masukan barang yang ingin kamu tukar ...</p>
        <label>
          Name:
          <input type="text" name="name" />
          <br />
          Harga:
          <input type="text" name="harga" />
          <br />
          Pesan:
          <input type="text" name="pesan" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MasukanBarangBarter;
