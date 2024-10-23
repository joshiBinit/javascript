const users = [];

function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const messageElement = document.getElementById('regMessage');

    if (users.some(user => user.username === username)) {
        messageElement.textContent = 'Username already exists!';
        return;
    }

    users.push({ username, password });
    messageElement.textContent = 'Registration successful!';
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const messageElement = document.getElementById('loginMessage');

    const user = users.find(user => user.username === username && user.password === password);

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
