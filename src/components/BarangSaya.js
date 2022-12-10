/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import BarangSayaTemplate from './templates/BarangSayaTemplate';

function BarangSaya({ barangsaya, setMyProduct }) {
  if (barangsaya.length > 0) {
    return (
      <div className="barangsaya-list">
        {
          barangsaya.map((barang) => (
            <BarangSayaTemplate
              id={barang}
              name={barang.name}
              image={barang.image}
              price={barang.price}
              description={barang.description}
              category={barang.category}
              setMyProduct={setMyProduct}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...barang}
            />
          ))
        }
      </div>
    );
  }
  return (
    <div className="barangsaya-list">
      <p>Barang Anda masih kosong</p>
    </div>
  );
}

BarangSaya.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  barangsaya: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProduct: PropTypes.func.isRequired,
};

export default BarangSaya;
