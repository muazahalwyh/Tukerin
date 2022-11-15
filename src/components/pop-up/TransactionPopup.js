/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { GrFormClose } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import CONFIG from '../../utils/config';

function TransactionPopup() {
  function onClick() {
    const root = document.querySelector('.root-popup-transaction');
    root.style.display = 'none';
  }

  return (
    <div className="root-popup-transaction">
      <div className="popup-transaction-success">
        <div className="close-form">
          <GrFormClose onClick={onClick} className="close-icon" />
        </div>
        <div className="transaksi-sukses">
          <h4>Yeay kamu berhasil menemukan barang yang sesuai</h4>
          <p>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
          <div className="product-match-container">
            <h5>Product match</h5>
            <div>
              <img src={CONFIG.BASE_IMAGE_URL} alt="foto pembeli" />
              <h5>nama pembeli</h5>
            </div>
            <div>
              <img src={CONFIG.BASE_IMAGE_URL} alt="foto pembeli" />
              <div>
                <p>nama barang</p>
                <p>harga</p>
              </div>
            </div>
            <div />
          </div>
          <a href="/login">
            <p>Hubungi via Whatsapp</p>
            <BsWhatsapp className="whatsapp-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TransactionPopup;
