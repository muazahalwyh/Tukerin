import React from 'react';

function TransactionCompleted() {
  return (
    <article className="transaction-item">
      <div className="transaction-item__header">
        <h3>Sepatu Sekolah</h3>
      </div>
      <div className="transaction-item__body">
        <img className="transaction-item__body-image" src="./images/gambar-kamera.jpg" alt="kamera" />
        <div className="transaction-item__body-title">
          <h4>Kamera baru beli kemarin</h4>
          <h4>Rp.200.000</h4>
        </div>
      </div>
      <div className="transaction-item__label">Transaksi Selesai</div>
    </article>
  );
}

export default TransactionCompleted;
