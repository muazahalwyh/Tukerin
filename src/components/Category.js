import React from 'react';
import elektronik from '../images/category/elektronik.png';
import fashionWanita from '../images/category/fashion-wanita.png';
import fashionPria from '../images/category/fashion-pria.png';
import fashionAnak from '../images/category/fashion-anak.png';
import makananMinuman from '../images/category/makanan-minuman.png';
import kecantikan from '../images/category/kecantikan.png';
import hobi from '../images/category/hobi.png';

function Category() {
  return (
    <div className="categories">
      <a href="/category/elektronik">
        <img src={elektronik} alt="foto kategori" />
        <p>Elektronik</p>
      </a>
      <a href="/category/fashion-wanita">
        <img src={fashionWanita} alt="foto kategori" />
        <p>
          Fashion
          <br />
          Wanita
        </p>
      </a>
      <a href="/category/fashion-pria">
        <img src={fashionPria} alt="foto kategori" />
        <p>
          Fashion
          <br />
          Pria
        </p>
      </a>
      <a href="/category/fashion-anak">
        <img src={fashionAnak} alt="foto kategori" />
        <p>
          Fashion
          <br />
          Anak
        </p>
      </a>
      <a href="/category/makanan-minuman">
        <img src={makananMinuman} alt="foto kategori" />
        <p>
          Makanan
          <br />
          & Minuman
        </p>
      </a>
      <a href="/category/kecantikan">
        <img src={kecantikan} alt="foto kategori" />
        <p>Kecantikan</p>
      </a>
      <a href="/category/hobi">
        <img src={hobi} alt="foto kategori" />
        <p>Hobi</p>
      </a>
    </div>
  );
}

export default Category;
