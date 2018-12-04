import client from './db';
import { databaseDefName, ordersContainer } from './config';
import { Request, Response, NextFunction } from 'express';

const container = client.database(databaseDefName).container(ordersContainer);

async function getCustomers(req: Request, res: Response, next: NextFunction ) {
  try {
    const { result: customers } = await container.items.readAll().toArray();
    res.render('index', { customers });
  }
  catch (err) {
    throw new Error(`Error fetching customers: ${err.message || err.body}`);
  }
}

export default { getCustomers };