export type State = 'ordered' | 'approved' | 'kitchen' | 'paid' | 'delivery';
export type Resolution = 'completed' | 'declined' | 'aborted';
export type Role = 'admin' | 'kitchen' | 'cashier' | 'delivery';

interface CustomRequest extends Request {
  user?: EmployeeUser | CustomerUser;
}

export interface Order {
  orderID: string;
  state: State;
  items: string[];
  price: number;
  clientNotes: string;
  resolution: Resolution;
  orderDate: Date;
}

export interface EmployeeUser {
  userName: string;
  password: string;
  role: Role;
}

export interface CustomerUser {
  userName: string;
  password: string;
  phone: string;
  orders: Order[];
}

// // export function getAllOrders(req: CustomRequest, res: Response): void {
// //   const user: EmployeeUser | CustomerUser | undefined = req.user;
// //   const orders: Order[] =
// //     user && 'role' in user && user.role === 'admin'
// //       ? getAdminOrders()
// //       : (user as CustomerUser)?.orders || [];
// //   res.json(orders);
// // }

// // Filter orders based on state
// // export function filterOrdersByState(req: CustomRequest, res: Response): void {
// //   const user: EmployeeUser | CustomerUser | undefined = req.user;
// //   const requestedState: State = req.params.state as State;
// //   const orders: Order[] =
// //     user && 'role' in user && user.role === 'admin'
// //       ? getAdminOrders()
// //       : (user as CustomerUser)?.orders || [];

// //   const filteredOrders = orders.filter(order => order.state === requestedState);
// //   res.json(filteredOrders);
// // }

// // Dummy orders for demonstration purposes
// function getAdminOrders(): Order[] {
//   return [
//     {
//       orderID: '1',
//       state: 'ordered',
//       items: ['Item 1', 'Item 2'],
//       price: 50,
//       clientNotes: 'Special instructions',
//       resolution: 'completed',
//       orderDate: new Date(),
//     },
//     // Add more sample orders as needed
//   ];
// }
