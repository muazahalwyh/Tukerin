import React, { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Myaccount from '../components/MyAccount/MyAccount';

// import { BsCamera } from 'react-icons/bs';

// import { MdOutlineLogout } from 'react-icons/md';
import '../styles/MyAccountPage.css';
import Loading from '../components/Loading';

function MyAccount({ myProfil }) {
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      { IsLoading ? (
        <Loading />
      ) : (
        <div className="myaccount-container">
          <h1>Akun Saya</h1>
          <div className="profile-saya">
            <Myaccount profilsaya={myProfil} />
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
  );
}

MyAccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProfil: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setMyProduct: PropTypes.func.isRequired,
};

export default MyAccount;
