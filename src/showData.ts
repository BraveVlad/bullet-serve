// this file contains code for later usage

import * as ejs from 'ejs';
import axios from 'axios';

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

type State = string;
type Resolution = string;

function generateOrderHTML(order: Order, userRole: UserRole): string {

    const template = getTemplateForRole(userRole);

    const html = ejs.render(template, { order });

    return html;
}

function getTemplateForRole(userRole: UserRole): string {

    switch (userRole) {
        case UserRole.ADMIN:
            return '<h1>Admin View: <%= order.orderID %></h1>';
        case UserRole.KITCHEN:
            return '<h1>Chef View: <%= order.clientNotes %></h1>';
        case UserRole.CAHSIER:
            return '<h1<Cash register View: <%= order.clientNotes %></h1>';   
        case UserRole.DELIVERY:
            return '<h1>Delivery View: <%= order.clientNotes %></h1>';                     
        default:
            return '<h1>Default View</h1>';
    }
}

enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

async function sendHttpRequest(order: Order, userRole: UserRole): Promise<void> {
    const html = generateOrderHTML(order, userRole);

    // Replace 'dummy-server-url' with your actual server URL
    const serverUrl = 'dummy-server-url';

    try {
        // Send HTTP request to the server
        const response = await axios.post(serverUrl, { html });
        console.log(response.data);
    } catch (error: any) {
        // Explicitly type the error variable
        console.error('Error sending HTTP request:', error.message);
    }
}

const exampleOrder: Order = {
    orderID: '123',
    state: 'Processing',
    items: ['Item 1', 'Item 2'],
    price: 100,
    clientNotes: 'Important notes from the client',
    resolution: 'Completed',
    orderDate: new OrderDate(),
};

const exampleUserRole: UserRole = UserRole.ADMIN;

sendHttpRequest(exampleOrder, exampleUserRole);
