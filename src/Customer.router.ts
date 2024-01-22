// export function authenticateUser(
//   req: CustomRequest,
//   res: Response,
//   next: Function
// ): void {
//   const { userName, password } = req.body;

//   // Dummy user data
//   const employeeUser: EmployeeUser = {
//     userName: 'employee',
//     password: 'employee123',
//     role: 'admin',
//   };

//   const customerUser: CustomerUser = {
//     userName: 'customer',
//     password: 'customer123',
//     phone: '123-456-7890',
//     orders: [],
//   };

//   if (
//     userName === employeeUser.userName &&
//     password === employeeUser.password
//   ) {
//     req.user = employeeUser;
//     next();
//   } else if (
//     userName === customerUser.userName &&
//     password === customerUser.password
//   ) {
//     req.user = customerUser;
//     next();
//   } else {
//     res.status(401).json({ error: 'Authentication failed' });
//   }
// }
