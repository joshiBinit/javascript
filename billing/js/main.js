// main.js - Main script to manage customers and invoices

import { Customer, VIPCustomer } from './customer.js';
import { Invoice } from './invoice.js';

const customers = [];
const invoices = [];

// Add event listener for adding customers
document.getElementById('addCustomerBtn').addEventListener('click', () => {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;

    // Create new customer
    const newCustomer = new Customer(name, email);

    if (newCustomer.validateEmail()) {
        customers.push(newCustomer);
        alert('Customer added successfully!');
    } else {
        alert('Invalid email format!');
    }

    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
});

// Add event listener for creating invoices
document.getElementById('createInvoiceBtn').addEventListener('click', () => {
    const customerName = document.getElementById('invoiceCustomer').value;
    const amount = parseFloat(document.getElementById('invoiceAmount').value);

    // Find the customer by name
    const customer = customers.find(c => c.name === customerName);

    if (!customer) {
        alert('Customer not found!');
        return;
    }

    const newInvoice = new Invoice(customer, amount);
    invoices.push(newInvoice);
    document.getElementById('invoicesList').innerHTML += `<p>${newInvoice.display()}</p>`;

    document.getElementById('invoiceCustomer').value = '';
    document.getElementById('invoiceAmount').value = '';
});


// Higher-order function to filter invoices by minimum amount
document.getElementById('filterInvoicesBtn').addEventListener('click', () => {
    const minAmount = parseFloat(document.getElementById('filterAmount').value);
    const filteredInvoices = filterInvoicesByAmount(minAmount);
    
    // Clear current invoices list and display filtered invoices
    document.getElementById('invoicesList').innerHTML = '';
    filteredInvoices.forEach(invoice => {
        document.getElementById('invoicesList').innerHTML += `<p>${invoice.display()}</p>`;
    });
});

// Higher-order function to filter invoices
function filterInvoicesByAmount(minAmount) {
    return invoices.filter(invoice => invoice.amount >= minAmount);
}
