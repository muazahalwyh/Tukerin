import React from 'react';
import PropTypes from 'prop-types';

function BarangSayaTemplate({
  name, image, description, price, category,
}) {
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
          <button type="submit" className="hapus-btn">Hapus</button>
        </div>
      </div>
    </article>
  );
}

BarangSayaTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  image: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BarangSayaTemplate;
