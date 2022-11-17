import React from 'react';
import PropTypes from 'prop-types';
// import Popup from 'reactjs-popup';
import BarangSaya from '../components/BarangSaya';
// import MasukanBarangBarter from '../components/pop-up/MasukanBarangBarter';
import '../styles/BarangSaya.css';

function BarangSayaPage({ myProduct }) {
  return (
    <div className="barang-saya">
      <h1>Barang Saya</h1>
      <div className="barang-saya_container">
        <BarangSaya barangsaya={myProduct} />
      </div>
      <a href="/add" className="add-barang-saya_btn">Tambahkan Barang Baru</a>
    </div>
  );
}

BarangSayaPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setMyProduct: PropTypes.func.isRequired,
};

export default BarangSayaPage;
