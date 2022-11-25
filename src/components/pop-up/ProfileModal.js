/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineInventory2, MdOutlineLogout } from 'react-icons/md';

function ProfileModal(onLogout) {
  function onClick() {
    const root = document.querySelector('.root-popup-profile');
    root.style.display = 'none';
  }
  return (
    <div onClick={onClick} className="root-popup-profile">
      <div className="profile-modal">
        <div>
          <a href="/profile">
            <CgProfile />
            <p>Profile</p>
          </a>
        </div>
        <div>
          <a href="/transaction">
            <AiOutlineShoppingCart />
            <p>Transaksi</p>
          </a>
        </div>
        <div>
          <a href="/barang-saya">
            <MdOutlineInventory2 />
            <p>Barang Saya</p>
          </a>
        </div>
        <div>
          <a href="/" onClick={onLogout}>
            <MdOutlineLogout />
            <p>Log Out</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
