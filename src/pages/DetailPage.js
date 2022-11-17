/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from '../components/product/ProductDetail';
import products from '../utils/data/products';
import '../styles/DetailPage.css';

function DetailPageWrapper({ authedUser, productDiajukan, setProductDiajukan }) {
  const { id } = useParams();

  return (
    <DetailPage
      authedUser={authedUser}
      id={id}
      productDiajukan={productDiajukan}
      setProductDiajukan={setProductDiajukan}
    />
  );
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: props.authedUser,
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
          authedUser={this.state.authedUser}
          {...this.state.product}
        />
      </section>
    );
  }
}

DetailPageWrapper.propTypes = {
  authedUser: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
};

DetailPage.propTypes = {
  authedUser: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
