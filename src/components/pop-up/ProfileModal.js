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
          <CgProfile />
          <a href="/profile"><p>Profile</p></a>
        </div>
        <div>
          <AiOutlineShoppingCart />
          <a href="/transaction"><p>Transaksi</p></a>
        </div>
        <div>
          <MdOutlineInventory2 />
          <a href="/barang-saya"><p>Barang Saya</p></a>
        </div>
        <div>
          <MdOutlineLogout />
          <a href="/home" onClick={onLogout}><p>Log Out</p></a>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
