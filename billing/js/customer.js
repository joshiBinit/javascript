// customer.js - Customer class with prototype methods

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method to validate email using regular expressions
    validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(this.email);
    }
}

// Inheritance: VIPCustomer inherits from Customer
class VIPCustomer extends Customer {
    constructor(name, email, discount) {
        super(name, email);
        this.discount = discount; // discount percentage
    }

    // Method to calculate discounted price
    applyDiscount(amount) {
        return amount - (amount * (this.discount / 100));
    }
}

export { Customer, VIPCustomer };
