import { Router } from 'express';
import SendMailController from '../controllers/SendMailController';

const router = new Router();

router.get('/', SendMailController.index);

export default router;
