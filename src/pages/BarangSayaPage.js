import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BarangSaya from '../components/BarangSaya';
import '../styles/BarangSaya.css';
import Loading from '../components/Loading';

function BarangSayaPage({ myProduct, setMyProduct }) {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      { IsLoading ? (
        <Loading />
      ) : (
        <div className="barang-saya">
          <h1>Barang Saya</h1>
          <div className="barang-saya_container">
            <BarangSaya barangsaya={myProduct} setMyProduct={setMyProduct} />
          </div>
          <a href="/add" className="add-barang-saya_btn">Tambahkan Barang Baru</a>
        </div>
      )}
    </div>
  );
}

BarangSayaPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProduct: PropTypes.func.isRequired,
};

export default BarangSayaPage;
