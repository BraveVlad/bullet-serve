import { Schema } from 'mongoose'

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
  resolution: Resolution
  orderDate: Date
}

interface Employee {
  userName: string
  password: string
  role: EmployeeRole
}

interface Customer {
  userName: string
  password: string
  phone: string
  orders: Order[]
}
