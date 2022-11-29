import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Myaccount from '../components/MyAccount/MyAccount';
// import { BsCamera } from 'react-icons/bs';
// import { MdOutlineLogout } from 'react-icons/md';
import '../styles/MyAccountPage.css';
import Loading from '../components/Loading';

function MyAccount({ myProfile, setMyProfile }) {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (myProfile.length > 0) {
    return (
      <div>
        { IsLoading ? (
          <Loading />
        ) : (
          <div className="myaccount-container">
            <h1>Akun Saya</h1>
            <div className="profile-saya">
              <Myaccount myProfile={myProfile} setMyProfile={setMyProfile} />
            </div>
            <div className="profile-setting">
              <div>
                <AiOutlineEdit />
                <a href="/addakun"><p>Ubah akun</p></a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (myProfile.length <= 0) {
    return (
      <div>
        { IsLoading ? (
          <Loading />
        ) : (
          <div className="myaccount-container">
            <h1>Akun Saya</h1>
            <div className="profile-saya">
              <div className="myaccount-header">
                <img className="myaccount-image" alt="foto profil" />
                <div className="myaccount-info">
                  <h5>Nama Lengkap</h5>
                  <p className="nama">Nama Lengkap</p>
                  <h5>Email</h5>
                  <p className="email">email@email.com</p>
                  <h5>Alamat</h5>
                  <p className="alamat">Alamat Anda</p>
                  <h5>No Hp</h5>
                  <p className="nohp">No. Handphone</p>
                </div>
              </div>
            </div>
            <div className="profile-setting">
              <div>
                <AiOutlineEdit />
                <a href="/edit-akun"><p>Ubah akun</p></a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MyAccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProfile: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProfile: PropTypes.func.isRequired,
};

export default MyAccount;

// <div className="myaccount-container">
//   <h1>Akun Saya</h1>
//   <div className="profile-picture">
//     <input type="file" onChange={handlePicture} />
//     <BsCamera className="icon-add-profile" />
//   </div>
//   <div className="profile-setting">
//     <div>
//       <AiOutlineEdit />
//       <a href="/AddAkun"><p>Ubah akun</p></a>
//     </div>
//     <div>
//       <MdOutlineLogout />
//       <a href="/transaction"><p>Keluar</p></a>
//     </div>
//   </div>
// </div>
