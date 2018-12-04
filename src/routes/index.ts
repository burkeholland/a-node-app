import { Router, Request, Response, NextFunction } from 'express';
import customerService from '../services/customer.service';

const router = Router();

/* GET home page. */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await customerService.getCustomers(req, res, next);
  }
  catch (err) {
    next(err);
  }
});

export default router;
