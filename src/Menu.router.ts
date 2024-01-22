import { Router } from 'express';
import { Order } from './Order.model';
import { Customer } from './Users.model';

export const router = Router();

router.param('orderId', async (request, response, next, orderId) => {
  try {
    request.order = await Order.findOne({ orderId: orderId });

    if (!request.order) {
      response.status(404).send(`Menu - Order # ${orderId} not found.`);
    }

    next();
  } catch (err) {
    next(err);
  }
});

router.get('/myorders', async (req, res, next) => {
  // TODO - return only user's orders
});

router.post('/new', async (req, res, next) => {
  // TODO - create a new order
});

router.get('/view/:orderId', async (req, res, next) => {
  const order = req.order;
  res.send(order);
});
