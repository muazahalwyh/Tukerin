/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TransactionTakesPlace from '../components/Transaction/TransactionTakesPlace';
import TransactionCompleted from '../components/Transaction/TransactionsCompleted';
import TransactionPending from '../components/Transaction/TransactionPending';
import '../styles/TransactionPage.css';

function TransactionPage({ productDiajukan, setProductDiajukan, productDitawar }) {
  if (productDiajukan[0].status === 'pending') {
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
            productDiajukan={productDiajukan}
            setProductDiajukan={setProductDiajukan}
            productDitawar={productDitawar}
          />
          <h2>Selesai</h2>
          <TransactionCompleted kosong />
        </div>
      </div>
    );
  }
  if (productDiajukan[0].status === 'selesai') {
    return (
      <div className="transaction-page">
        <h1>Transaksi</h1>
        <div className="transaction-page__container">
          <h2>Pending</h2>
          <TransactionPending productDiajukan={productDiajukan} />
          <h2>Berlangsung</h2>
          <TransactionTakesPlace productDiajukan={productDiajukan} />
          <h2>Selesai</h2>
          <TransactionCompleted productDiajukan={productDiajukan} kosong={false} />
        </div>
      </div>
    );
  }
}

TransactionPage.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductDiajukan: PropTypes.func.isRequired,
  productDitawar: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionPage;
