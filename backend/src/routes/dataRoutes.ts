import { Router } from 'express';
import { getPrices } from '../controllers/dataController';

const router = Router();

router.get('/:symbol', getPrices);

export default router;
