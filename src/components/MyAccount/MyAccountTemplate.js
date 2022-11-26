import React from 'react';
import PropTypes from 'prop-types';
// import { BsCamera } from 'react-icons/bs';
import '../../styles/MyAccountTemplate.css';

function MyAccountTemplate({
  image, name, email, alamat, noHp,
}) {
  return (
    <div className="myaccount-header">
      <img className="myaccount-image" src={image} alt="foto profil" />
      <div className="myaccount-info">
        <h5>Nama Lengkap</h5>
        <p className="nama">{name}</p>
        <h5>Email</h5>
        <p className="email">{email}</p>
        <h5>Alamat</h5>
        <p className="alamat">{alamat}</p>
        <h5>No Hp</h5>
        <p className="nohp">{noHp}</p>
      </div>
    </div>
  );
}

MyAccountTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.arrayOf(PropTypes.object).isRequired,
  alamat: PropTypes.string.isRequired,
  noHp: PropTypes.string.isRequired,

//   name: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
//   image: PropTypes.arrayOf(PropTypes.object).isRequired,
//   description: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
};

export default MyAccountTemplate;
