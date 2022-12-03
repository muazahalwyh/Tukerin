/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import useInput from '../hooks/useInput';
// import { addProduct } from '../utils/data/local-data';

function ProductInput({
  publishedProducts, setPublishedProducts, prevBarangSaya, setBarangSaya, noWA,
}) {
  const [image, setImage] = useState([]);
  const [name, handleNameChange] = useInput('');
  const [price, handlePriceChange] = useInput('');
  const [category, handleCategoryChange] = useInput('');
  const [description, handleDescriptionChange] = useInput('');

  const navigate = useNavigate();

  // const reader = new FileReader();
  // reader.readAsDataURL(image);

  // Convert Blob into File
  // const myFile = new File([image], 'image.jpeg', {
  //   type: image.type,
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    setPublishedProducts([...publishedProducts, {
      id: Date.now().toString(), name, price, description, image, category, noWA,
    }]);
    setBarangSaya([...prevBarangSaya, {
      id: Date.now().toString(), name, price, description, image, category, noWA,
    }]);
    navigate('/barang-saya');
  };

  // const handleImage = (e) => {
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };

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

  const clickImage = () => {
    const inputFile = document.getElementById('input-file');
    const imgFile = document.getElementById('img-file');

    imgFile.style = 'display:none';
    inputFile.value = '';
    inputFile.style = 'display:block';
  };

  // eslint-disable-next-line no-return-assign
  return (
    <form className="add-product__input" onSubmit={onSubmit}>
      <div className="input-image">
        <div id="input-file">
          <input type="file" name="input-file" onChange={clickFile} required />
          <AiOutlinePlus className="icon-add" />
        </div>
        <img id="img-file" style={{ display: 'none' }} src="" alt="gambar barang" onChange={clickImage} />
      </div>
      <h4>Nama</h4>
      <input
        className="add-product__input-text"
        placeholder="Nama Barang"
        value={name}
        onChange={handleNameChange}
        required
      />
      <br />
      <h4>Harga</h4>
      <input
        className="add-product__input-text"
        placeholder="Rp."
        value={price}
        onChange={handlePriceChange}
        required
      />
      <br />
      <h4>Kategori</h4>
      <select className="add-product__input-select" value={category} onChange={handleCategoryChange} required>
        <option value=""> --Pilih Kategori-- </option>
        <option value="elektronik">Elektronik</option>
        <option value="fashion wanita">Fashion Wanita</option>
        <option value="fashion pria">Fashion Pria</option>
        <option value="fashion anak">Fashion Anak</option>
        <option value="makanan & minuman">Makanan dan Minuman</option>
        <option value="kecantikan">Kecantikan</option>
        <option value="Hobi">Hobi</option>
      </select>
      <br />
      <h4>Deskripsi</h4>
      <textarea
        className="add-product__input-description"
        placeholder="Jelaskan kondisi barang anda"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <br />
      <input className="add-product__input-checkbox" type="checkbox" required />
      {' '}
      Saya bertanggung jawab atas keaslian barang
      <br />
      <button type="submit" className="add-product__action">Tambahkan</button>
    </form>
  );
}

ProductInput.propTypes = {
  publishedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPublishedProducts: PropTypes.func.isRequired,
  prevBarangSaya: PropTypes.arrayOf(PropTypes.object).isRequired,
  setBarangSaya: PropTypes.func.isRequired,
  noWA: PropTypes.string,
};

export default ProductInput;
