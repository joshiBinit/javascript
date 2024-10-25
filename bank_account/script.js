// Object Constructor for Bank Account
function BankAccount(owner) {
    let balance = 0; // Private variable

    // Method to deposit money
    deposit = function(amount) {
        if (amount > 0) {
            balance += amount;
            return `Deposited $${amount}. New balance is $${balance}.`;
        } else {
            return 'Deposit amount must be positive!';
        }
    };

    // Method to withdraw money
    withdraw = function(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            return `Withdrew $${amount}. New balance is $${balance}.`;
        } else {
            return 'Insufficient funds or invalid amount!';
        }
    };

    // Method to check balance
    checkBalance = function() {
        return `Current balance is $${balance}.`;
    };

    // Method to get owner name
    getOwner = function() {
        return owner;
    };
}

// Create a new bank account
let myAccount;

// UI Logic
document.getElementById('createAccount').addEventListener('click', function() {
    const owner = prompt("Enter the owner's name:");
    myAccount = new BankAccount(owner);
    document.getElementById('accountInfo').textContent = `Account created for ${owner}.`;
});

document.getElementById('deposit').addEventListener('click', function() {
    if (myAccount) {
        const amount = parseFloat(prompt('Enter amount to deposit:'));
        const message = myAccount.deposit(amount);
        alert(message);
    } else {
        alert('Please create an account first!');
    }
});

document.getElementById('withdraw').addEventListener('click', function() {
    if (myAccount) {
        const amount = parseFloat(prompt('Enter amount to withdraw:'));
        const message = myAccount.withdraw(amount);
        alert(message);
    } else {
        alert('Please create an account first!');
    }
});

document.getElementById('checkBalance').addEventListener('click', function() {
    if (myAccount) {
        const message = myAccount.checkBalance();
        alert(message);
    } else {
        alert('Please create an account first!');
    }
});
