const { nanoid } = require('nanoid');
const products = require('./product');

const addProductHandler = (request, h) => {
  const {
    name, category, price, description,
  } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newProduct = {
    name, category, price, description, id, createdAt, updatedAt,
  };
  products.push(newProduct);
  const isSuccess = products.filter((product) => product.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Product berhasil ditambahkan',
      data: {
        productId: id,
      },
    });
    response.code(201);
    response.header('Access-Control-Allow-Origin', '*');
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Product gagal ditambahkan',
  });
  response.code(500);
  response.header('Access-Control-Allow-Origin', '*');
  return response;
};

const getAllProductsHandler = () => ({
  status: 'success',
  data: {
    products,
  },
});

const getProductByIdHandler = (request, h) => {
  const { id } = request.params;

  const product = products.filter((n) => n.id === id)[0];

  if (product !== undefined) {
    return {
      status: 'success',
      data: {
        product,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Product tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editProductByIdHandler = (request, h) => {
  const { id } = request.params;
  const {
    name, category, price, description,
  } = request.payload;
  const updatedAt = new Date().toISOString();
  const index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    products[index] = {
      ...products[index],
      name,
      category,
      price,
      description,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Product berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui product. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deleteProductByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Product berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Product gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  editProductByIdHandler,
  deleteProductByIdHandler,
};
