import React from 'react';
import PropTypes from 'prop-types';

function BarangSayaTemplate({
  // eslint-disable-next-line no-unused-vars
  id, name, image, description, price, category,
}) {
  const myProducts = JSON.parse(localStorage.getItem('MY_PRODUCTS'));
  const publishedProducts = JSON.parse(localStorage.getItem('PUBLISHED_PRODUCTS'));
  const onDelete = () => {
    myProducts.splice(myProducts.findIndex((mP) => mP.id === id), 1);
    localStorage.setItem('MY_PRODUCTS', JSON.stringify(myProducts));
    publishedProducts.splice(myProducts.findIndex((pP) => pP.id === id), 1);
    localStorage.setItem('PUBLISHED_PRODUCTS', JSON.stringify(publishedProducts));
  };
  return (
    <article className="Barang-saya_item">
      <div className="Barang-saya_item__header">
        <h3>{name}</h3>
      </div>
      <div className="Barang-saya_item__body">
        <img className="Barang-saya_item__body-image" src={image} alt="barang-saya" />
        <div className="Barang-saya_itemful">
          <div className="Barang-saya_item__body-deskripsi">
            <h4>
              Rp.
              {price}
            </h4>
            <p>{category}</p>
            <p>Deskripsi:</p>
            <p>{description}</p>
          </div>
          <button onClick={onDelete} type="button" className="hapus-btn">Hapus</button>
        </div>
      </div>
    </article>
  );
}

BarangSayaTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BarangSayaTemplate;
