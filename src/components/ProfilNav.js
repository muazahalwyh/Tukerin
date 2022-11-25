/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineInventory2, MdOutlineLogout } from 'react-icons/md';

function ProfilNav(onLogout) {
  return (
    <div className="profile">
      <div className="profil-nav">
        <div className="icon">
          <CgProfile />
          <a href="/profile"><p>Profile</p></a>
        </div>
        <div className="icon">
          <AiOutlineShoppingCart />
          <a href="/transaction"><p>Transaksi</p></a>
        </div>
        <div className="icon">
          <MdOutlineInventory2 />
          <a href="/barang-saya"><p>Barang Saya</p></a>
        </div>
        <div className="icon">
          <MdOutlineLogout />
          <a href="/" onClick={onLogout}><p>Log Out</p></a>
        </div>
      </div>
    </div>
  );
}

export default ProfilNav;
