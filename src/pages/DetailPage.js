/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../components/product/ProductDetail';
import products from '../utils/data/products';
import '../styles/DetailPage.css';

function DetailPageWrapper({ productDiajukan, setProductDiajukan }) {
  const { id } = useParams();

  return (
    <DetailPage id={id} productDiajukan={productDiajukan} setProductDiajukan={setProductDiajukan} />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
    };
  }

  async componentDidMount() {
    const Product = await products;
    console.log(Product);

    // this.setState(() => ({
    //   product: Product.findIndex((product) => product.id === '1'),
    // }));
  }

  render() {
    if (this.state.product === 'alan') {
      return <p>Product tidak ditemukan</p>;
    }

    return (
      <section>
        <ProductDetail
          {...this.state.product}
        />
      </section>
    );
  }
}

DetailPageWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
};

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
