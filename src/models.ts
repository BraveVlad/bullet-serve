type State = 'ordered' | 'approved' | 'kitchen' | 'paid' | 'delivery'
type Resolution = 'completed' | 'declined' | 'aborted'
type Role = 'admin' | 'kitchen' | 'cashier' | 'delivery'

interface Order {
  orderID: string
  state: State
  items: string[]
  price: number
  clientNotes: string
  resolution: Resolution
  orderDate: Date
}

interface EmployeeUser {
  userName: string
  password: string
  role: Role
}

interface CustomerUser {
  userName: string
  password: string
  phone: string
  orders: Order[]
}
