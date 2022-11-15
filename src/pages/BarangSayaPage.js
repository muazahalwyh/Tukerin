import React from 'react';
import BarangSaya from '../components/BarangSaya';
import '../styles/BarangSaya.css';

function BarangSayaPage() {
  return (
    <div className="barang-saya">
      <h1>Barang Saya</h1>
      <div className="barang-saya_container">
        <BarangSaya />
      </div>
      <button type="submit" className="add-barang-saya_btn">Tambahkan Barang Baru</button>
    </div>
  );
}

export default BarangSayaPage;
