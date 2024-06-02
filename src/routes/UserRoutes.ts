import express from 'express'
import { CreateUsers, DeleteUsers, GetUsers, UpdateUsers } from '../controllers/UserControllers';
const router = express.Router();


router.post('/', CreateUsers)
router.get('/', GetUsers );
router.delete('/:id', DeleteUsers );
router.patch('/:id', UpdateUsers );


export default router;