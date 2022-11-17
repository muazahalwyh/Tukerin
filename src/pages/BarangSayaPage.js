import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import BarangSaya from '../components/BarangSaya';
import MasukanBarangBarter from '../components/pop-up/MasukanBarangBarter';
import '../styles/BarangSaya.css';

function BarangSayaPage() {
  const [barangsaya, setBarangSaya] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('MY_APP_STATE');
    if (data) {
      setBarangSaya(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('MY_APP_STATE', JSON.stringify(barangsaya));
  }, [barangsaya]);

  return (
    <div className="barang-saya">
      <h1>Barang Saya</h1>
      <div className="barang-saya_container">
        <BarangSaya barangsaya={barangsaya} />
      </div>
      <Popup trigger={<button type="submit" className="add-barang-saya_btn">Tambahkan Barang Baru</button>}>
        <MasukanBarangBarter
          prevBarangSaya={barangsaya}
          setBarangSaya={setBarangSaya}
        />
      </Popup>
    </div>
  );
}

export default BarangSayaPage;
