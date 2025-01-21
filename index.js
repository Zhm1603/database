import { Router } from 'express';
import { getAllUsers, getUser } from './controllers.js';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);

export default router;
