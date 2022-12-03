/* eslint-disable react/require-default-props */
/* eslint-disable no-unreachable */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TransactionTakesPlace from '../components/Transaction/TransactionTakesPlace';
import TransactionCompleted from '../components/Transaction/TransactionsCompleted';
import TransactionPending from '../components/Transaction/TransactionPending';
import '../styles/TransactionPage.css';

function TransactionPage({ productDiajukan, setProductDiajukan, productDitawar }) {
  if (productDiajukan != null && productDitawar != null) {
    const productDiajukanPending = productDiajukan.filter((product) => product.status === 'pending');
    const productDiajukanSelesai = productDiajukan.filter((product) => product.status === 'selesai');
    const productDitawarPending = productDitawar.filter((product) => product.status === 'pending');

    return (
      <div className="transaction-page">
        <h1>Transaksi</h1>
        <div className="transaction-page__container">
          <h2>Pending</h2>
          <TransactionPending
            productDiajukan={productDiajukan}
            productDitawar={productDitawar}
          />
          <h2>Berlangsung</h2>
          <TransactionTakesPlace
            productDiajukan={productDiajukanPending}
            setProductDiajukan={setProductDiajukan}
            productDitawar={productDitawarPending}
          />
          <h2>Selesai</h2>
          <TransactionCompleted
            productDiajukan={productDiajukanSelesai}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="transaction-page">
      <p>Transaksi masih kosong</p>
    </div>
  );
}

TransactionPage.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object),
  setProductDiajukan: PropTypes.func,
  productDitawar: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionPage;
