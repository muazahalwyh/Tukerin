/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineInventory2, MdOutlineLogout } from 'react-icons/md';

// eslint-disable-next-line no-unused-vars
function ProfileModal() {
  function onClick() {
    const root = document.querySelector('.root-popup-profile');
    root.style.display = 'none';
  }
  function logout() {
    window.localStorage.removeItem('AUTHED_USER');
    window.localStorage.removeItem('MY_PRODUCTS');
    window.localStorage.removeItem('MY_PROFILE');
    window.localStorage.removeItem('PRODUCT_DITAWAR');
    window.localStorage.removeItem('PRODUCT_DIAJUKAN');
    window.localStorage.removeItem('accessToken');
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
          <a href="/" onClick={logout}>
            <MdOutlineLogout />
            <p>Log Out</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
