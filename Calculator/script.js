const display = document.querySelector('#display');
const keys = document.querySelector('.calculator-keys');

let currentInput = '';
let previousInput = '';
let operator = null;

keys.addEventListener('click', function(event) {
    const target = event.target;
    const value = target.value;

    if (!target.matches('button')) return;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            clearDisplay();
            break;
        default:
            inputNumber(value);
    }
    updateDisplay(); // Always update the display
});

function inputNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput.includes('.') && number === '.') return;

    currentInput = currentInput === '0' ? number : currentInput + number;
}

function handleOperator(nextOperator) {
    if (operator && currentInput) {
        calculate();
    }

    // Concatenate the expression to display
    previousInput = currentInput;
    operator = nextOperator;
    currentInput = ''; // Clear current input for the next number
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    // Show the result in currentInput
    currentInput = result.toString();
    operator = null; // Clear operator for next calculation
    previousInput = ''; // Clear previous input
}

function clearDisplay() {
    currentInput = '0'; // Reset current input
    previousInput = ''; // Reset previous input
    operator = null; // Reset operator
}

function updateDisplay() {
    // Display the full expression: previousInput + operator + currentInput
    display.value = previousInput + (operator ? ' ' + operator + ' ' : '') + (currentInput || '0');
}
