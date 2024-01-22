import { Router } from 'express';
import { Order } from './Order.model';

export const router = Router();

router.param('orderId', async (request, response, next, orderId) => {
  try {
    request.order = await Order.findOne({ orderId: orderId });

    if (!request.order) {
      response.status(404).send(`Order # ${orderId} not found.`);
    }

    next();
  } catch (err) {
    next(err);
  }
});

// router.get('/', async (req, res, next) => {
//   try {
//     res.end()
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/all', async (req, res, next) => {
  try {
    res.send(await Order.find());
  } catch (err) {
    next(err);
  }
});

router.get('/:orderId', (req, res) => {
  res.send(req.order);
});

router.post('/create', async (req, res, next) => {
  try {
    const { orderId, state, items, price, clientNotes, resolution, orderDate } =
      req.body;

    // TODO - Check if already exists
    const order = await Order.findOne({ orderId: orderId });

    if (order) {
      res.status(409).send(`Unable to create new order.`);
    }

    const createdOrder = await Order.create({
      orderId,
      state,
      items,
      price,
      clientNotes,
      resolution,
      orderDate,
    });

    // TODO - Validate values!
    const savedOrder = await createdOrder.save();

    res.status(200).send(`order # ${orderId} created.`);
  } catch (err) {
    next(err);
  }
});

router.put('/:orderId', async (req, res, next) => {
  try {
    const order = req.order;
    const orderId = order.orderId;

    const result = await Order.updateOne({ _id: order._id });

    if (result.modifiedCount === 1) {
      res.status(200).send(`Updated order # ${orderId}.`);
    } else {
      res.status(404).send(`Unable to update order # ${orderId}.`);
    }
  } catch (err) {
    next(err);
  }
});

router.patch('/:orderId', async (req, res, next) => {
  try {
    const order = req.order;
    const orderId = order.orderId;
    const updateParams = req.body;
    const result = await Order.updateOne(
      { _id: order._id },
      { $set: updateParams }
    );

    if (result.modifiedCount === 1) {
      res.status(200).send(`Updated partial order # ${orderId}.`);
    } else {
      res.status(404).send(`Unable to partially update order # ${orderId}.`);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/delete/:orderId', async (req, res, next) => {
  try {
    const order = req.order;
    const orderId = order.orderId;

    const result = await Order.deleteOne({ _id: order._id });

    if (result.deletedCount === 1) {
      res.status(200).send(`Deleted order # ${orderId}.`);
    } else {
      res.status(404).send(`Unable to delete order # ${orderId}.`);
    }
  } catch (err) {
    next(err);
  }
});
