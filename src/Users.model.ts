import { Schema, model } from 'mongoose';
import { Order, orderSchema } from './Order.model';
import { createHash } from 'crypto';

const EMOPLOYEE_ROLE = ['ADMIN', 'KITCHEN', 'CASHIER', 'DELIVERY'];

export interface Employee {
  username: string;
  password: string;
  role: (typeof EMOPLOYEE_ROLE)[number];
}

export const employeeSchema = new Schema<Employee>({
  username: { type: String, unique: true },
  password: { type: String, set: hashPassword },
  role: EMOPLOYEE_ROLE,
});

interface Customer {
  username: string;
  password: string;
  phone: string;
  orders: Order[];
}

export const customerSchema = new Schema<Customer>({
  username: { type: String, unique: true },
  password: { type: String, set: hashPassword },
  phone: { type: String, unique: true },
  orders: [orderSchema],
});

export function hashPassword(value: string) {
  const hash = createHash('sha256');
  hash.update(value);

  return hash.digest('base64');
}

export const Customer = model<Customer>(
  'Customer',
  customerSchema,
  'customers'
);
export const Employee = model<Employee>(
  'Employee',
  employeeSchema,
  'employees'
);
