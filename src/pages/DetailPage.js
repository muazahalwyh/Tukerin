/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../components/product/ProductDetail';
// import products from '../utils/data/products';

function DetailPage({
  filteredProducts, productDiajukan, setProductDiajukan, productDitawar, setProductDitawar,
}) {
  const { id } = useParams();

  console.log(productDitawar);

  // const arrProductDitawar = filteredProducts.filter((productt) => productt.id === id);
  // // console.log(arrProductDitawar);
  // const objProductDitawar = arrProductDitawar.map((productt) => productt);
  // console.log(objProductDitawar);

  useEffect(() => {
    if (productDitawar === null) {
      setProductDitawar(filteredProducts.filter((productt) => productt.id === id));
    }
    if (productDitawar != null) {
      setProductDitawar([...productDitawar, (
        filteredProducts.filter((productt) => productt.id === id)
      )]);
    }
  }, []);

  if (productDitawar === null) {
    return <p>Product tidak ditemukan</p>;
  }
  return (
    <section>
      <ProductDetail
        id={id}
        filteredProducts={filteredProducts}
        productDiajukan={productDiajukan}
        productDitawar={productDitawar}
        setProductDiajukan={setProductDiajukan}
        setProductDitawar={setProductDitawar}
      />
    </section>
  );
}

DetailPage.propTypes = {
  filteredProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDitawar: PropTypes.func.isRequired,
};

export default DetailPage;
