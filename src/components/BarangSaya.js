import React from 'react';

function BarangSaya() {
  return (
    <article className="Barang-saya_item">
      <div className="Barang-saya_item__header">
        <h3>Sepatu Olahraga Ivan Gunawan</h3>
      </div>
      <div className="Barang-saya_item__body">
        <img className="Barang-saya_item__body-image" src="./images/sepatu.jpeg" alt="sepatu" />
        <div className="Barang-saya_itemful">
          <div className="Barang-saya_item__body-deskripsi">
            <h4>Olahraga</h4>
            <h4>Rp.1.500.000</h4>
          </div>
          <button type="submit" className="hapus-btn">Hapus</button>
        </div>
      </div>
    </article>
  );
}

export default BarangSaya;
