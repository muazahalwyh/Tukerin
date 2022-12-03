/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unreachable */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import BarangSelesai from './BarangSelesai';

function TransactionCompleted({ productDiajukan }) {
  // const img = new Image();
  // img = URL.revokeObjectURL(productDiajukan[0].image);
  // const reader = new FileReader();
  // reader.readAsArrayBuffer(productDiajukan[0].image);
  console.log(productDiajukan);
  if (productDiajukan !== 0) {
    return (
      <article className="transaction-item">
        {
            productDiajukan.map((product) => (
              <BarangSelesai
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                {...product}
              />
            ))
          }
      </article>
    );
  }
  if (productDiajukan.length === 0) {
    return (
      <p>Barang masih kosong</p>
    );
  }
}

TransactionCompleted.propTypes = {
  productDiajukan: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionCompleted;

// if (productDiajukan === null) {
//   return (
//     <p>Barang masih kosong</p>
//   );
// }
// return (
//   <article className="transaction-item">
//     <div className="barang-ditawar">
//       <div className="transaction-item__header">
//         <h3>Barang yang ditawar</h3>
//       </div>
//       <div className="transaction-item__body-pending">
//         <div className="img-name-price_container">
// eslint-disable-next-line max-len
//           <img className="transaction-item__body-image-pending" src={productDiajukan[0].image} alt="kamera" />
//           <div>
//             <h3>{productDiajukan[0].name}</h3>
//             <h4>
//               Rp
//               {productDiajukan[0].price}
//             </h4>
//           </div>
//         </div>
//         <div className="transaction-item__body-title-pending">
//           <p>{productDiajukan[0].description}</p>
//         </div>
//         <div className="transaction-item__body-action-pending">
//           <p>Selesai</p>
//         </div>
//       </div>
//     </div>
//   </article>
// );
