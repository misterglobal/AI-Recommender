import { Router } from 'express';
import { businessController } from '../controllers/businessController';

const router = Router();

router.post('/submit', businessController.processUserInput);

export default router;