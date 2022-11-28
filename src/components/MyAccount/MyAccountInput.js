import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import useInput from '../../hooks/useInput';

function MyAccountInput({ prevState, setState }) {
  const [image, setImage] = useState([]);
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [alamat, handleAlamatChange] = useInput('');
  const [noHp, handleNoHpChange] = useInput('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setState([...prevState, {
      image, name, email, alamat, noHp,
    }]);
    navigate('/profile');
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    const upload = e.target.files[0];
    setImage(URL.createObjectURL(upload));
  };

  return (
    <form className="add-akun__input" onSubmit={onSubmit}>
      <div className="input-image">
        <input type="file" onChange={handleImage} src={image} />
        <AiOutlinePlus className="icon-add" />
      </div>
      <h4>Nama</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nama Lengkap"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <h4>Email</h4>
      <input
        className="add-akun__input-text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <h4>Alamat</h4>
      <input
        className="add-akun__input-text"
        placeholder="Alamat"
        value={alamat}
        onChange={handleAlamatChange}
      />
      <br />
      <h4>No.Hp</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nomor Hp"
        value={noHp}
        onChange={handleNoHpChange}
      />
      <br />
      <button type="submit" className="add-akun__action">Simpan Perubahan</button>
    </form>
  );
}

MyAccountInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prevState: PropTypes.arrayOf(PropTypes.object).isRequired,
  setState: PropTypes.func.isRequired,
};

export default MyAccountInput;
