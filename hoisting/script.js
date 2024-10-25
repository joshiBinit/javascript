// Test Variable Hoisting
function testVariableHoisting() {
    var x; // Declare x
    console.log('Value of x before initialization:', x); // Undefined due to hoisting
    x = 5; // Assign value to x
    console.log('Value of x after initialization:', x); // 5
}

// Test Function Hoisting
function testFunctionHoisting() {
    console.log('Calling function before declaration:');
    try {
        hoistedFunction(); // Works due to hoisting
    } catch (error) {
        console.error(error);
    }

    function hoistedFunction() {
        console.log('This function is hoisted!');
    }
}

// Event Listeners for buttons
document.getElementById('testVariable').addEventListener('click', () => {
    document.getElementById('result').innerHTML = '<strong>Variable Hoisting:</strong><br>';
    testVariableHoisting();
});

document.getElementById('testFunction').addEventListener('click', () => {
    document.getElementById('result').innerHTML = '<strong>Function Hoisting:</strong><br>';
    testFunctionHoisting();
});
