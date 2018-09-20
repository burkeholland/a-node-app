import { Router, Request, Response, NextFunction } from 'express';
import customers from '../data/customers';

const router = Router();

/* GET home page. */
router.get('/customers', (req: Request, res: Response, next: NextFunction) => {
  customers.get().then(items => {
    res.json(items.result);
  }).catch(err => {
    console.log(err);
  });
});

export default router;
