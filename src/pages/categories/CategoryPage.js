/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../components/product/ProductItem';
import '../../styles/CategoryPage.css';

function Elektronik({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'elektronik')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function FashionWanita({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion wanita')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function FashionPria({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion pria')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function FashionAnak({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion anak')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function MakananMinuman({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'makanan & minuman')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function Kecantikan({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'kecantikan')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

function Hobi({ publishedProduct, keyword }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'Hobi')
    .filter((product1) => product1.name.toLowerCase().includes(keyword.toLocaleLowerCase()));

  if (filteredByCategory.length > 0) {
    return (
      <div className="category-container">
        <h2>Daftar Barang</h2>
        <div className="category-items">
          {
          filteredByCategory.map((product) => (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...product}
            />
          ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="category-container">
      <p>Barang tidak ditemukan</p>
    </div>
  );
}

Elektronik.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FashionWanita.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FashionPria.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FashionAnak.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MakananMinuman.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Kecantikan.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Hobi.propTypes = {
  publishedProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {
  Elektronik, FashionAnak, FashionWanita, FashionPria, MakananMinuman, Kecantikan, Hobi,
};
