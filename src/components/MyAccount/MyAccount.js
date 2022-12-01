import React from 'react';
import PropTypes from 'prop-types';
import MyAccountTemplate from './MyAccountTemplate';

function Myaccount({ myProfile, setMyProfile }) {
  return (
    <div className="myprofilee-list">
      {
          myProfile.map((profile) => (
            <MyAccountTemplate
              // eslint-disable-next-line react/no-array-index-key
              name={profile.name}
              image={profile.image}
              email={profile.email}
              alamat={profile.alamat}
              nohp={profile.nohp}
              setMyProfile={setMyProfile}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...profile}
            />
          ))
        }
    </div>
  );
}

Myaccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  myProfile: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMyProfile: PropTypes.func.isRequired,
};

export default Myaccount;
