import React from 'react';
import PropTypes from 'prop-types';
import MyAccountTemplate from './MyAccountTemplate';

function Myaccount({ profilsaya }) {
  if (profilsaya.length > 0) {
    return (
      <div className="profilsaya-list">
        {
          profilsaya.map((profil) => (
            <MyAccountTemplate
              // eslint-disable-next-line react/no-array-index-key
              name={profil.name}
              image={profil.image}
              email={profil.email}
              alamat={profil.alamat}
              nohp={profil.nohp}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...profil}
            />
          ))
        }
      </div>
    );
  }
}

Myaccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  profilsaya: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Myaccount;
