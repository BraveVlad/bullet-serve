import * as Date from 'Date';

type State = "ordered" | "approved" | "kitchen" | "Paid" | "delivery";
type Resolution = "Delivered" | "Admin cancel" | "Kitchen cancel";
type Role = "Admin" | "chef" | "cashier" | "Deivery";

type Order = {
    orderID: string;
    state: State;
    items: string[];
    price: number;
    clientNotes: string;
    resolution: Resolution;
    orderDate: OrderDate;
};

class OrderDate {
    date: Date;

    constructor() {
        this.date = new Date();
    }
}

type EmployeeUser  = {

    userName : string;
    password : string;
    role : Role;

}

type CustomerUser = {

    userName : string;
    password : string;
    phone : string;
    orders : Order[];

}




    
