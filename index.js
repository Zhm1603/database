import { Router } from 'express';
import { getAllUsers, getUser, updateUserInfo } from './controllers.js';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.post('/users/:id', updateUserInfo)
export default router;
