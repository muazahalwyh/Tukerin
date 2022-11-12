let products = [
  {
    image: './images/logo192.png',
    name: 'kamera',
    price: 'Rp.200.000',
    category: 'hobi',
    description: 'baru beli kemarin sore',
  },
];

function getAllProducts() {
  return products;
}

function addProduct({
  image, name, price, category, description,
}) {
  products = [...products, {
    image,
    name,
    price,
    category,
    description,
  }];
}

export { addProduct, getAllProducts };
