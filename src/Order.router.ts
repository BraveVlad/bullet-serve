import { Router } from 'express'
import { Order } from './Order.model'

export const router = Router()

router.param('orderId', async (req, res, next, orderId) => {
  try {
    const fetchedOrder = await Order.findOne({ orderID: orderId })
    console.log(fetchedOrder)
    if (!fetchedOrder) {
      res.status(404)
      res.end(`Order # ${orderId} not found.`)
    }

    req.order = fetchedOrder

    next()
  } catch (err) {
    next(err)
  }
})

// router.get('/', async (req, res, next) => {
//   try {
//     res.end()
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/all', async (req, res, next) => {
  try {
    res.send(await Order.find())
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', (req, res) => {
  res.end(req.order)
})

router.post('/create', async (req, res, next) => {
  try {
    const { orderID, state, items, price, clientNotes, resolution, orderDate } =
      req.body

    const createdOrder = await Order.create({
      orderID,
      state,
      items,
      price,
      clientNotes,
      resolution,
      orderDate,
    })

    // TODO - Validate values!
    const savedOrder = await createdOrder.save()

    res.status(200)
    res.end(`order # ${savedOrder.orderId} created.`)
  } catch (err) {
    next(err)
  }
})
