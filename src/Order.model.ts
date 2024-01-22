import { Schema, model } from 'mongoose'

const ORDER_STATE = [
  ,
  'STARTED',
  'WAITING_APPROVAL',
  'KITCHEN',
  'CASHIER',
  'DELIVERY',
  'DELIVERED',
]

const RESOLUTION = ['ONGOING', 'COMPLETED', 'DECLINED', 'ABORTED']

export interface Order {
  orderID: string
  state: string
  items: string[]
  price: number
  clientNotes: string
  resolution: (typeof RESOLUTION)[number]
  orderDate: Date
}

export const orderSchema = new Schema<Order>({
  orderID: String,
  state: ORDER_STATE,
  items: [String],
  price: Number,
  clientNotes: String,
  resolution: RESOLUTION,
  orderDate: Date,
})

export const Order = model<Order>('Order', orderSchema, 'orders')
