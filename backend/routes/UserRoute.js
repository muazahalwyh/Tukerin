/* eslint-disable import/extensions */
import express from 'express';
import {
  getUsers, getUsersById, saveUser, updateUser, deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/users/:id', getUsersById);
router.get('/users', getUsers);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
