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
const EMOPLOYEE_ROLE = ['ADMIN', 'KITCHEN', 'CASHIER', 'DELIVERY']

export interface Order {
  orderID: string
  state: string
  items: string[]
  price: number
  clientNotes: string
  resolution: (typeof EMOPLOYEE_ROLE)[number]
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

export interface Employee {
  username: string
  password: string
  role: (typeof EMOPLOYEE_ROLE)[number]
}

export const employeeSchema = new Schema<Employee>({
  username: String,
  password: String,
  role: EMOPLOYEE_ROLE,
})

interface Customer {
  username: string
  password: string
  phone: string
  orders: Order[]
}

export const customerSchema = new Schema<Customer>({
  username: String,
  password: String,
  phone: String,
  orders: [orderSchema],
})

export const Order = model<Order>('Order', orderSchema, 'orders')
export const Customer = model<Customer>('Customer', customerSchema, 'customers')
export const Employee = model<Employee>('Employee', employeeSchema, 'employees')
