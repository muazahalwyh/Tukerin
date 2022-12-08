import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import useInput from '../../hooks/useInput';

// eslint-disable-next-line no-unused-vars
function MyAccountInput({ prevState, setState }) {
  const [image, setImage] = useState([]);
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [alamat, handleAlamatChange] = useInput('');
  const [noHp, handleNoHpChange] = useInput('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setState([{
      image, name, email, alamat, noHp,
    }]);
    navigate('/profile');
  };

  const clickFile = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));

    const inputFile = document.getElementById('input-file');
    const imgFile = document.getElementById('img-file');

    inputFile.style = 'display:none';
    imgFile.style = 'display:block';
    imgFile.style = 'width:85px';
    imgFile.style = 'height:85px';
    imgFile.src = URL.createObjectURL(e.target.files[0]);
  };

  return (
    <form className="add-akun__input" onSubmit={onSubmit}>
      <div className="input-image">
        <div id="input-file">
          <input type="file" name="input-file" onChange={clickFile} required />
          <AiOutlinePlus className="icon-add" />
        </div>
        <img id="img-file" style={{ display: 'none' }} src="" alt="gambar barang" />
      </div>
      <h4>Nama</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nama Lengkap"
        value={name}
        onChange={handleNameChange}
        required
      />
      <br />
      <h4>Email</h4>
      <input
        className="add-akun__input-text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <br />
      <h4>Alamat</h4>
      <input
        className="add-akun__input-text"
        placeholder="Alamat"
        value={alamat}
        onChange={handleAlamatChange}
        required
      />
      <br />
      <h4>No.Hp</h4>
      <input
        className="add-akun__input-text"
        placeholder="Nomor Hp"
        value={noHp}
        onChange={handleNoHpChange}
        required
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
