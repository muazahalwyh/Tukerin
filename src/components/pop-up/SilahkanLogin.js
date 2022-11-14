/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function SilahkanLogin() {
  function onClick() {
    const root = document.querySelector('.root-popup-login');
    root.style.display = 'none';
  }

  return (
    <div onClick={onClick} className="root-popup-login">
      <div className="silahkan-login-popup">
        <p>Silahkan Login terlebih dahulu.</p>
        <a href="/login"><p>Login</p></a>
      </div>
    </div>
  );
}

export default SilahkanLogin;
