import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api-endpoint';
import brandTukerin from '../images/brand-tukerin.png';

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <div className="container-img">
        <img src={brandTukerin} alt="logo tukerin" />
      </div>
      <div className="container-content">
        <h2>LOGIN TUKERIN</h2>
        <LoginInput login={onLogin()} />
        <p>
          Belum punya akun?
          <Link className="link" to="/register">Daftar di sini.</Link>
        </p>
      </div>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
