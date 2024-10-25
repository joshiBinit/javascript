// Load users from local storage or initialize an empty array
const users = JSON.parse(localStorage.getItem('users')) || [];

// Add event listeners for the Registration form
document.getElementById('regUsername').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('regPassword').focus(); // Move focus to password field
    }
});

document.getElementById('regPassword').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        registerUser(); // Call register function
    }
});

// Add event listeners for Login form
document.getElementById('loginUsername').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('loginPassword').focus(); // Move focus to password field
    }
});

document.getElementById('loginPassword').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loginUser(); // Call login function
    }
});

function registerUser() {
    const usernameField = document.getElementById('regUsername');
    const passwordField = document.getElementById('regPassword');
    const messageElement = document.getElementById('regMessage');

    // Clear previous required indications
    usernameField.classList.remove('required');
    passwordField.classList.remove('required');

    // Check if username or password is empty
    let hasError = false;
    if (!usernameField.value) {
        usernameField.classList.add('required'); // Add required class
        hasError = true; // Set error flag
    }
    if (!passwordField.value) {
        passwordField.classList.add('required'); // Add required class
        hasError = true; // Set error flag
    }

    if (hasError) {
        return; // Exit the function if validation fails
    }

    // Check if the username already exists
    if (users.some(user => user.username === usernameField.value)) {
        messageElement.textContent = 'Username already exists!';
        return; // Exit if username is taken
    }

    // Register the new user
    users.push({ username: usernameField.value, password: passwordField.value });
    localStorage.setItem('users', JSON.stringify(users)); // Save users to local storage
    messageElement.textContent = 'Registration successful!';

    // Clear the input fields
    usernameField.value = '';
    passwordField.value = '';
}

function loginUser() {
    const usernameField = document.getElementById('loginUsername');
    const passwordField = document.getElementById('loginPassword');
    const messageElement = document.getElementById('loginMessage');

    // Clear previous required indications
    usernameField.classList.remove('required');
    passwordField.classList.remove('required');

    // Check if username or password is empty
    let hasError = false;
    if (!usernameField.value) {
        usernameField.classList.add('required'); // Add required class
        hasError = true; // Set error flag
    }
    if (!passwordField.value) {
        passwordField.classList.add('required'); // Add required class
        hasError = true; // Set error flag
    }

    if (hasError) {
        return; // Exit the function if validation fails
    }

    // Check for user login
    const user = users.find(user => user.username === usernameField.value && user.password === passwordField.value);

    if (user) {
        messageElement.textContent = 'Login successful!';
        window.location.href ='../dashboard/dashboard.html';
        // Redirect to the apps page or perform further actions
    } else {
        messageElement.textContent = 'Invalid username or password';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
