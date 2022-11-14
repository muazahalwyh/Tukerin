import React from 'react';
import TransactionTakesPlace from '../components/Transaction/TransactionTakesPlace';
import TransactionCompleted from '../components/Transaction/TransactionsCompleted';
import '../styles/TransactionPage.css';

function TransactionPage() {
  return (
    <div className="transaction-page">
      <h1>Transaksi</h1>
      <div className="transaction-page__container">
        <h2>Berlangsung</h2>
        <TransactionTakesPlace />
        <h2>Selesai</h2>
        <TransactionCompleted />
      </div>
    </div>
  );
}

export default TransactionPage;
