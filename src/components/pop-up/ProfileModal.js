/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function ProfileModal() {
  function onClick() {
    const root = document.querySelector('.root-popup-profile');
    root.style.display = 'none';
  }
  return (
    <div onClick={onClick} className="root-popup-profile">
      <div className="profile-modal">
        <a href="/profile"><p>Profile</p></a>
        <a href="/profile"><p>Transaksi</p></a>
        <a href="/profile"><p>Barang Saya</p></a>
        <a href="/profile"><p>Log Out</p></a>
      </div>
    </div>
  );
}

export default ProfileModal;
