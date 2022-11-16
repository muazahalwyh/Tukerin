import express from 'express';
import {
  getProducts, getProductById, saveProduct,
  updateProduct, deleteProduct,
} from '../controllers/productController';
// express router
const router = express.Router();

// Route get All Products
router.get('/', getProducts);
// Route get single Product
router.get('/:id', getProductById);
// Route Create Product
router.get('/', saveProduct);
// Route Update Product
router.get('/:id', updateProduct);
// Route Delete Product
router.get('/:id', deleteProduct);

export default router;
