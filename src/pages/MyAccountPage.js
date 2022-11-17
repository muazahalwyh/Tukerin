import React, { useState } from 'react';
import { BsCamera } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineLogout } from 'react-icons/md';
import '../styles/MyAccountPage.css';

function MyAccount() {
  const [picture, setPicture] = useState([]);
  console.log(picture);

  const handlePicture = (e) => {
    console.log(e.target.files);
    setPicture(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="myaccount-container">
      <h1>Akun Saya</h1>
      <div className="profile-picture">
        <input type="file" onChange={handlePicture} />
        <BsCamera className="icon-add-profile" />
      </div>
      <div className="profile-setting">
        <div>
          <AiOutlineEdit />
          <a href="/profile"><p>Ubah akun</p></a>
        </div>
        <div>
          <MdOutlineLogout />
          <a href="/transaction"><p>Keluar</p></a>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
