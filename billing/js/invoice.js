// invoice.js - Invoice class with prototype methods

class Invoice {
    constructor(customer, amount) {
        this.customer = customer;
        this.amount = amount;
        this.date = new Date();
    }

    // Method to display invoice details
    display() {
        return `${this.customer.name} - Amount: $${this.amount.toFixed(2)} - Date: ${this.date.toLocaleDateString()}`;
    }
}

export { Invoice };
