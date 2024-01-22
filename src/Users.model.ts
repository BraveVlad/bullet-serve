import { Schema, model } from 'mongoose'
import { Order, orderSchema } from './Order.model'

const EMOPLOYEE_ROLE = ['ADMIN', 'KITCHEN', 'CASHIER', 'DELIVERY']

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

export const Customer = model<Customer>('Customer', customerSchema, 'customers')
export const Employee = model<Employee>('Employee', employeeSchema, 'employees')
