import { Router, Request, Response, NextFunction } from 'express';
import customersService from '../data/customers';

const router = Router();

/* GET home page. */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request = await customersService.get();
    res.render('index', { customers: request.result });
  }
  catch (err) {
    res.render('error', { message: 'Theres was a problem getting customers from the database' });
  }
});

export default router;
