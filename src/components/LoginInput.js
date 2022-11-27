import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const onlogin = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
    navigate('/');
    // if (status === 200) {
    //   navigate('/');
    // }
  };

  return (
    <div className="input-login">
      <input type="email" placeholder="Username or Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button onClick={onlogin} type="submit">Masuk</button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
