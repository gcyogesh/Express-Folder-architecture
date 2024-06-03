import express from 'express';
import { CreateUsers, DeleteUsers, GetUsers, UpdateUsers } from '../controllers/UserControllers';
import upload from '../middlewares/MulterMiddleware';

const router = express.Router();

router.post('/', upload.single('image'), CreateUsers);
router.get('/', GetUsers);
router.delete('/:id', DeleteUsers);
router.patch('/:id', UpdateUsers);

export default router;
    