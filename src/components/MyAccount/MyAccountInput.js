import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
// import { toast } from 'react-toastify';
import useInput from '../../hooks/useInput';
// eslint-disable-next-line import/order
import { toast } from 'react-toastify';
// eslint-disable-next-line no-unused-vars
function MyAccountInput({ prevState, setState }) {
  const [image, setImage] = useState([]);
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [alamat, handleAlamatChange] = useInput('');
  const [noHp, handleNoHpChange] = useInput('');

  const navigate = useNavigate();

  console.log(name);
  // eslint-disable-next-line no-unused-vars
  const session = localStorage.getItem('MY_PROFILE');
  console.log(session);

  const onSubmit = (e) => {
    e.preventDefault();
    setState([{
      image, name, email, alamat, noHp,
    }]);
    navigate('/profile');
    toast.success('Perubahan data success!');
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    const upload = e.target.files[0];
    setImage(URL.createObjectURL(upload));
  };

  return (
    <form className="add-akun__input" onSubmit={onSubmit}>
      <div className="input-image">
        <input type="file" onChange={handleImage} src={image} required />
        <AiOutlinePlus className="icon-add" />
      </div>
      <h4>Nama</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nama Lengkap"
        value={name}
        onChange={handleNameChange}
        required=""
      />
      <br />
      <h4>Email</h4>
      <input
        className="add-akun__input-text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required=""
      />
      <br />
      <h4>Alamat</h4>
      <input
        className="add-akun__input-text"
        placeholder="Alamat"
        value={alamat}
        onChange={handleAlamatChange}
        required=""
      />
      <br />
      <h4>No.Hp</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nomor Hp"
        value={noHp}
        onChange={handleNoHpChange}
        required=""
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
