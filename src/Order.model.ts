import { Schema, model } from 'mongoose'

export const ORDER_STATE = [
  ,
  'STARTED',
  'WAITING_APPROVAL',
  'KITCHEN',
  'CASHIER',
  'DELIVERY',
  'DELIVERED',
]

export const RESOLUTION = ['ONGOING', 'COMPLETED', 'DECLINED', 'ABORTED']

export interface Order {
  orderId: string
  state: string
  items: string[]
  price: number
  clientNotes: string
  resolution: (typeof RESOLUTION)[number]
  orderDate: Date
}

export const orderSchema = new Schema<Order>({
  orderId: String,
  state: String,
  items: [String],
  price: Number,
  clientNotes: String,
  resolution: String,
  orderDate: Date,
})

export const Order = model<Order>('Order', orderSchema, 'orders')
