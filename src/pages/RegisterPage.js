import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api-endpoint';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
  return (
    <div className="register-page">
      <h1>Register Page</h1>
      <RegisterInput register={onRegisterHandler()} />
      <p>
        Back to
        <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default RegisterPage;
