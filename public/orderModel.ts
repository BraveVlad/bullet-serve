export type State = 'ordered' | 'approved' | 'kitchen' | 'paid' | 'delivery'
export type Resolution = 'completed' | 'declined' | 'aborted'
export type Role = 'admin' | 'kitchen' | 'cashier' | 'delivery'

export interface Order {
  orderID: string
  state: State
  items: string[]
  price: number
  clientNotes: string
  resolution: Resolution
  orderDate: Date
}

export interface EmployeeUser {
  userName: string
  password: string
  role: Role
}

export interface CustomerUser {
  userName: string
  password: string
  phone: string
  orders: Order[]
}
