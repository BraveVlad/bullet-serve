import { Request, Response } from 'express';
import { Order, State, Resolution, EmployeeUser, CustomerUser } from './orderModel';

interface CustomRequest extends Request {
  user?: EmployeeUser | CustomerUser;
}


export function authenticateUser(req: CustomRequest, res: Response, next: Function): void {
  const { userName, password } = req.body;


  // Dummy user data
  const employeeUser: EmployeeUser = {
    userName: 'employee',
    password: 'employee123',
    role: 'admin',
  };

  const customerUser: CustomerUser = {
    userName: 'customer',
    password: 'customer123',
    phone: '123-456-7890',
    orders: [],
  };

  if (userName === employeeUser.userName && password === employeeUser.password) {
    req.user = employeeUser;
    next();
  } else if (userName === customerUser.userName && password === customerUser.password) {
    req.user = customerUser;
    next();
  } else {
    res.status(401).json({ error: 'Authentication failed' });
  }
}


export function getAllOrders(req: CustomRequest, res: Response): void {
  const user: EmployeeUser | CustomerUser = req.user;
  const orders: Order[] = user && user.role === 'admin' ? getAdminOrders() : user?.orders || [];
  res.json(orders);
}


export function filterOrdersByState(req: CustomRequest, res: Response): void {
  const user: EmployeeUser | CustomerUser = req.user;
  const requestedState: State = req.params.state as State;
  const orders: Order[] = user && user.role === 'admin' ? getAdminOrders() : user?.orders || [];

  const filteredOrders = orders.filter((order) => order.state === requestedState);
  res.json(filteredOrders);
}

// Dummy 
function getAdminOrders(): Order[] {
  return [
    {
      orderID: '1',
      state: 'ordered',
      items: ['Item 1', 'Item 2'],
      price: 50,
      clientNotes: 'Special instructions',
      resolution: 'completed',
      orderDate: new Date(),
    },

  ];
}
