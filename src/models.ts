type State = "ordered" | "approved" | "kitchen" | "Paid" | "delivery";
type Resolution = "Delivered" | "Admin cancel" | "Kitchen cancel";
type Role = "Admin" | "chef" | "cashier" | "Deivery";

interface Order {
	orderID: string;
	state: State;
	items: string[];
	price: number;
	clientNotes: string;
	resolution: Resolution;
	orderDate: Date;
}

interface EmployeeUser {
	userName: string;
	password: string;
	role: Role;
}

interface CustomerUser {
	userName: string;
	password: string;
	phone: string;
	orders: Order[];
}
