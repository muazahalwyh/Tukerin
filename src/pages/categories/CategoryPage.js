/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../components/product/ProductItem';
import '../../styles/CategoryPage.css';

function Elektronik({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'elektronik');
  console.log(filteredByCategory);
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

function FashionWanita({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion wanita');
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

function FashionPria({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion pria');
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

function FashionAnak({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'fashion anak');
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

function MakananMinuman({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'makanan & minuman');
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

function Kecantikan({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'kecantikan');
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

function Hobi({ publishedProduct }) {
  const filteredByCategory = publishedProduct.filter((product) => product.category === 'Hobi');
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
